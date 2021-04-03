import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main'
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import Http from '@network/Http';
import {useHistory} from 'react-router-dom';
import User, {UserType} from '@models/User';

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

	React.useEffect(() => {
		Http.getCurrentUser()
			.then((response) => {
				console.log(`resp is ok = ${response.ok}`);
				console.log(history.location.pathname)
				if (!response.ok &&
					history.location.pathname !== '/auth' &&
					history.location.pathname !== '/login' &&
					history.location.pathname !== '/signup'
				) {
					history.push('/auth');
				}

				if (response.ok &&
					(history.location.pathname === '/auth' ||
					history.location.pathname === '/login' ||
					history.location.pathname === '/signup')
				) {
					console.log('go to places')
					// setIsLoading(false);
					history.push('/places');
				}

				if (!response.ok) {

				}


				return response.json();
			})
			.then((body) => {
				const user  = body as User;
				if (user.userType !== UserType.barista &&
					history.location.pathname === '/staff') {
					// setIsLoading(false);
					history.push('/places');
				}
			})
	}, []);

	return <PageContainer>
			<Header {...headerProps}/>
			<Main {...mainProps}/>
			<Footer {...footerProps}/>
		</PageContainer>;
}

export default BasePage;