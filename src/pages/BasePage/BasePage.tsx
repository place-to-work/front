import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main';
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import {useHistory, useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import User, {UserType} from '@models/User';

interface BasePageProps {
	headerProps?: HeaderProps;
	mainProps?: MainProps;
	footerProps?: FooterProps;
}

const BasePage: React.FC<BasePageProps> = ({
	headerProps,
	mainProps,
	footerProps,
}) => {
	const history = useHistory();
	const {id} = useParams<{ id }>();


	React.useEffect(() => {
		if (!User.isAuthenticated) {
			User.fetch()
				.then(console.log)
				.catch(console.log);
		}
	}, []);

	React.useEffect(() => {
		if (User.isAuthenticated) {
			if (['/auth', '/login', '/signup'].indexOf(history.location.pathname) > -1) {
				if (User.userType === UserType.client) {
					history.push('/places');
				} else if (User.userType === UserType.staff) {
					id && history.push(`/staff/${id}`);
				}
			}
		}
	}, [User.id, User.userType]);


	return <PageContainer>
		<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
		<Header {...headerProps}/>
		<Main {...mainProps}>
		</Main>
		<Footer {...footerProps}/>
	</PageContainer>;
};

export default observer(BasePage);