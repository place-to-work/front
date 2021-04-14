import React from 'react';
import './AuthPage.scss';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType} from '@components/primitives/Typo';
import ImageCard from '@components/primitives/ImageCard';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {observer} from 'mobx-react-lite';
import t, {Phrase} from '@models/Translate';
import User, {UserType} from '@models/User';

const AuthPage: React.FC = () => {
	const history = useHistory();
	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		{t(Phrase.contactUs)}
	</Typo>;

	React.useEffect(()=>{
		if(!User.isAuthenticated){
			if(User.userType == UserType.client){
				history.push('/places');
			} else if(User.userType === UserType.staff){
				history.push('/staff');
			}

		}
	},[User.id, User.userType]);

	return <BasePage
		headerProps={{
			middle: () => <CenterLogo/>
		}}
		mainProps={{
			body: () => <>
				<ImageCard
					imageSrc={'https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg'}
					style={{width: '100%', margin:'0 auto', maxWidth:'initial'}}
				/>
				<Typo block type={TypographyType.h1} style={{marginBottom: '18px', lineHeight: '1.1', textAlign:'center'}}>
					{t(Phrase.slogan1)}
				</Typo>
				<Typo block type={TypographyType.h5} style={{marginBottom: '18px', margin:'0 auto', textAlign:'center'}}>
					{t(Phrase.slogan2)}
				</Typo>
				<Button
					element="a"
					onClick={() => history.push('/signup')}
					full
					buttonSize={ButtonSize.classic}
					style={{margin: '0 auto',marginBottom: '9px'}}
				>
					{t(Phrase.register)}
				</Button>
				<Button
					style={{margin: '0 auto'}}
					element="a"
					onClick={() => history.push('/login')}
					full
					color={ButtonColor.accentGrey}
				>
					{t(Phrase.login)}
				</Button>
			</>
		}}
		footerProps={{
			right: () => ContactUs
		}}
	/>;
};

export default observer(AuthPage);