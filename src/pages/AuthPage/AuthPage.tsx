import React from 'react';
import Typo, {TypographyType} from '@components/primitives/Typo';
import Header from '@components/a11y/Header';
import ImageCard from '@components/primitives/ImageCard';
import Main from '@components/a11y/Main';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import Footer from '@components/a11y/Footer';
import './AuthPage.scss';
import PageContainer from '@components/a11y/PageContainer';
import {useHistory} from 'react-router-dom';

const AuthPage: React.FC = () => {
	const history = useHistory();
	return <>
		<PageContainer>
			<Header withCenterLogo/>
			<Main style={{padding: 10, width: 360}}>
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
					onClick={() => history.push('signup')}
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
			</Main>
			<Footer style={{flexDirection: 'row-reverse', padding: 8}}>
				<Typo
					// element="a"
					href="/contact"
					block
					type={TypographyType.h5}
					style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
				>
					Свяжитесь с нами
				</Typo>
			</Footer>
		</PageContainer>
	</>;
};

export default AuthPage;