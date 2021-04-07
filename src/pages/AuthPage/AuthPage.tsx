import React from 'react';
import './AuthPage.scss';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType} from '@components/primitives/Typo';
import ImageCard from '@components/primitives/ImageCard';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {UserCategory} from '../../mobx/local/UserStore/types';
import {useLocalStore} from '../../mobx/hooks/useLocalStore';
import UserStore from '../../mobx/local/UserStore/UserStore';
import {observer} from 'mobx-react-lite';
import t from '@models/Translate';
import {Phrase} from '@models/Translate';

const AuthPage: React.FC = () => {
	const history = useHistory();
	const store = useLocalStore(() => new UserStore());
	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		{t(Phrase.contactUs)}
	</Typo>;

	React.useEffect(()=>{
		console.log('user effect auth',{user: store.user});
		if(store.user.id !== -1){
			if(store.user.type == UserCategory.client){
				history.push('/places');
			} else if(store.user.type === UserCategory.staff){
				history.push('/staff');
			}

		}
	},[ store.user, store.user.id, store.user.type]);


	return <BasePage
		headerProps={{
			middle: () => <CenterLogo/>
		}}
		mainProps={{
			body: () => <>
				<ImageCard
					imageSrc={'https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg'}
					style={{width: '100%'}}
				/>
				<Typo block type={TypographyType.h1} style={{marginBottom: '18px', lineHeight: '1.1'}}>
					{t(Phrase.slogan1)}
				</Typo>
				<Typo block type={TypographyType.h5} style={{marginBottom: '18px'}}>
					{t(Phrase.slogan2)}
				</Typo>
				<Button
					element="a"
					onClick={() => history.push('/signup')}
					full
					buttonSize={ButtonSize.classic}
					style={{marginBottom: '9px'}}
				>
					{t(Phrase.register)}
				</Button>
				<Button
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