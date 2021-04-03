import React from 'react';
import './AuthPage.scss';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import {IconSize, IconType} from '@components/primitives/Icon';
import IconCenter from '@components/primitives/Icon/';
import Typo, {TypographyType} from '@components/primitives/Typo';
import ImageCard from '@components/primitives/ImageCard';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';

const AuthPage: React.FC = () => {
	const history = useHistory();

	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		Свяжитесь с нами
	</Typo>;


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
				<Typo block type={TypographyType.h1} style={{marginBottom: '18px', lineHeight: '1.1'}}>Сделайте
					город своим офисом!</Typo>
				<Typo block type={TypographyType.h5} style={{marginBottom: '18px'}}>Превращаем кафе и
					музеи вашего города в настоящие рабочие пространства!</Typo>
				<Button
					element="a"
					onClick={() => history.push('/signup')}
					full
					buttonSize={ButtonSize.classic}
					style={{marginBottom: '9px'}}
				>
					Регистрация
				</Button>
				<Button
					element="a"
					onClick={() => history.push('/login')}
					full
					color={ButtonColor.accentGrey}
				>
					Вход
				</Button>
			</>
		}}
		footerProps={{
			right: () => ContactUs
		}}
	/>;
};

export default AuthPage;