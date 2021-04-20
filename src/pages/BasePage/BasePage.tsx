import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main';
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import {useHistory, useParams} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import User, {UserType} from '@models/User';
import Loader from '@components/primitives/Loader';
import {isMobileOnly} from 'react-device-detect';
import NotMobilePage from '@pages/NotMobilePage';
import o9n from 'o9n';
import Notification from '@models/Notification';

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
	const [isLoading, setIsLoading] = React.useState(false);
	const history = useHistory();
	const {id} = useParams<{ id }>();

	if (!isMobileOnly) {
		return <NotMobilePage/>;
	}

	React.useEffect(() => {
		o9n.orientation.lock('portrait')
			.then((message) => {
				Notification.error('luck' + message);
				Notification.error('luck' + message);
				Notification.error('luck' + message);
				Notification.error('luck' + message);
				Notification.error('luck' + message);
			})
			.catch((message) => {
				Notification.error('error' + message);
				Notification.error('error' + message);
				Notification.error('error' + message);
				Notification.error('error' + message);
				Notification.error('error' + message);
			});
	}, []);

	React.useEffect(() => {
		if (!User.isAuthenticated) {
			setIsLoading(true);
			User.fetch()
				.then(console.log)
				.then(() => setIsLoading(false))
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
		<Header {...headerProps}/>
		{isLoading ? <Loader/> : <Main {...mainProps}/>}
		<Footer {...footerProps}/>
	</PageContainer>;
};

export default observer(BasePage);