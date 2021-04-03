import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main'
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import Http from '@network/Http';
import {useHistory} from 'react-router-dom';

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
				setIsLoading(false);
				console.log(`resp is ok = ${response.ok}`);
				if (!response.ok &&
					history.location.pathname !== '/auth' &&
					history.location.pathname !== '/login' &&
					history.location.pathname !== '/signup'
				) {
					history.replace('/auth');
				}

				if (response.ok &&
					(history.location.pathname === '/auth' ||
					history.location.pathname === '/login' ||
					history.location.pathname === '/signup')
				) {
					history.replace('/places');
				}
			});
	}, []);

	return isLoading ?
		null
		:
		<PageContainer>
			<Header {...headerProps}/>
			<Main {...mainProps}/>
			<Footer {...footerProps}/>
		</PageContainer>;
}

export default BasePage;