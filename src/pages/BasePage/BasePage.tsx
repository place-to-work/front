import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main'
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import Http from '@network/Http';
import {useHistory, useParams} from 'react-router-dom';
import User, {UserType} from '@models/User';
import {UserContext} from "@models/UserProvider";
import {observer} from "mobx-react-lite";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";
import {UserCategory} from "../../mobx/local/UserStore/types";
import {get} from "mobx";

interface BasePageProps {
	headerProps?: HeaderProps;
	mainProps?: MainProps;
	footerProps?: FooterProps;
}

const BasePage: React.FC<BasePageProps> = ({
	headerProps ,
	mainProps,
	footerProps,
}) => {
	const history = useHistory();
	const [isLoading, setIsLoading] = React.useState(true);

	const store = useLocalStore(() => new UserStore());
	console.log(store.user)

	const { id } = useParams<{id}>();

	const onSuccess = React.useCallback(()=>{
		console.log('on success')
		if(['/auth','/login','/signup'].indexOf(history.location.pathname) !== -1) {
			if (store.user.type === UserCategory.client) {
				history.push('/places')
			} else if (store.user.type === UserCategory.staff) {
				history.push('/staff')
			}
		}
	},[history])

	const onError = React.useCallback(()=>{
		console.log('on error')
		if(['/auth','/login','/signup'].indexOf(history.location.pathname) === -1 ){
			history.push('/auth')
		}

	},[history])

	React.useEffect(( )=>{
		console.log('base use effect')
		 const getUser = async () =>{
			 const user = await store.fetchUser();
			 if(user){
				 // onSuccess();
			 } else{
				 // onError();
			 }
		 }
		getUser();
	},[])

	React.useEffect(()=>{
		console.log('effect base', store.user.id)
		if(store.user.id !== -1){
			if(['/auth','/login','/signup'].indexOf(history.location.pathname) > -1) {
				if (store.user.type === UserCategory.client) {
					history.push('/places')
				} else if (store.user.type === UserCategory.staff) {
					console.log({id})
					id && history.push(	`/staff/${id}`)
				}
			}
		}
	},[store.user.id])

	console.log('in base ', store.user.id, store.user.name)


	return <PageContainer>
			<Header {...headerProps}/>
			<Main {...mainProps} />
			<Footer {...footerProps}/>
		</PageContainer>;
}

export default observer(BasePage);