import PageContainer from '@pages/BasePage/PageContainer';
import React from 'react';
import Main, {MainProps} from '@pages/BasePage/Main'
import Header, {HeaderProps} from '@pages/BasePage/Header';
import Footer, {FooterProps} from '@pages/BasePage/Footer/Footer';
import Http from '@network/Http';

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
	const [isLoading, setIsLoading] = React.useState(true);

	Http.getCurrentUser()
		.then((response) => {
			console.log(`response = ${JSON.stringify(response, null, 4)}`);
			setIsLoading(false);
		});

	return isLoading ?
		<div>qwer</div>
		:
		<PageContainer>
			<Header {...headerProps}/>
			<Main {...mainProps}/>
			<Footer {...footerProps}/>
		</PageContainer>;
}

export default BasePage;