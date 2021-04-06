import React from 'react';
import * as Yup from 'yup';
import './LoginPage.scss';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import Button, {ButtonSize} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {useLocalStore} from '../../mobx/hooks/useLocalStore';
import UserStore from '../../mobx/local/UserStore/UserStore';
import {UserCategory} from '../../mobx/local/UserStore/types';
import {observer} from 'mobx-react-lite';


export interface LoginValues {
	email: string;
	password: string;
}

export const initialValues: LoginValues = {
	email: '',
	password: '',
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Неверная почта')
		.required('Обязательное поле'),
	password: Yup.string()
		.min(8, 'Минимум 6 смволов')
		.required('Обязательное поле'),
});

const LoginPage: React.FC = () => {
	const history = useHistory();
	const store = useLocalStore(() => new UserStore());

	React.useEffect(()=>{
		store.fetchUser();
	},[]);

	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		Свяжитесь с нами
	</Typo>;


	React.useEffect(()=>{
		console.log('user effect login',{user: store.user});
		if(store.user.id !== -1){

			if(store.user.type == UserCategory.client){
				history.push('/places');
			} else if(store.user.type === UserCategory.staff){
				// history.push('/places')
				// window.close();
			}

		}
	},[store.user.id, store.user.type]);

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{
			body: () => <Formik<LoginValues>
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={store.loginUser}
				render={(formikProps: FormikProps<LoginValues>) => <>

					<Typo block type={TypographyType.h1}>Вход</Typo>
					<Form>
						<FormikInput
							id="email"
							type="email"
							title="Почта"
							placeholder="Введите вашу почту"
							formikProps={formikProps}
						/>
						<FormikInput
							id="password"
							title="Пароль"
							type="password"
							placeholder="Введите пароль"
							formikProps={formikProps}
						/>
						<Button
							full
							buttonSize={ButtonSize.classic}
							style={{margin: '13px 0'}}
						>
							Войти
						</Button>
						<Typo
							block
							type={TypographyType.h5}
							textAlign={TypoTextAlign.center}
							weight={TypoWeight.bold}
							color={TypoColor.black}
							onClick={() => history.push('/signup')}
							style={{
								cursor: 'pointer',
							}}
						>
							Нет аккаунта?
						</Typo>
					</Form>
				</>}
			/>,
		}}
		footerProps={{right: () => ContactUs}}
	>
		{/*<PageContainer>*/}
		{/*	<Header style={{justifyContent: 'center', padding: 11}}>*/}
		{/*		<Typo*/}
		{/*			// element='a'*/}
		{/*			block*/}
		{/*			type={TypographyType.h3}*/}
		{/*			href="/"*/}
		{/*			style={{textDecoration: 'none'}}*/}
		{/*		>*/}
		{/*			Рабочее место*/}
		{/*		</Typo>*/}
		{/*	</Header>*/}
		{/*	<Main style={{padding: 10, width: 360}}>*/}
		{/*		<Formik<LoginValues>*/}
		{/*			validationSchema={validationSchema}*/}
		{/*			initialValues={initialValues}*/}
		{/*			onSubmit={onSubmit}*/}
		{/*			render={(formikProps: FormikProps<LoginValues>) => <>*/}

		{/*				<Typo block type={TypographyType.h2}>Вход</Typo>*/}
		{/*				<Form>*/}
		{/*					<FormikInput*/}
		{/*						id="email"*/}
		{/*						type="email"*/}
		{/*						title="Почта"*/}
		{/*						placeholder="Введите вашу почту"*/}
		{/*						formikProps={formikProps}*/}
		{/*					/>*/}
		{/*					<FormikInput*/}
		{/*						id="password"*/}
		{/*						title="Пароль"*/}
		{/*						type="password"*/}
		{/*						placeholder="Введите пароль"*/}
		{/*						formikProps={formikProps}*/}
		{/*					/>*/}
		{/*					<Button*/}
		{/*						full*/}
		{/*						buttonSize={ButtonSize.classic}*/}
		{/*						style={{margin: '13px 0'}}>Войти</Button>*/}
		{/*					<Typo*/}
		{/*						block*/}
		{/*						type={TypographyType.h5}*/}
		{/*						// textAlign={TypoTextAlign.center} не работает ...*/}
		{/*						weight={TypoWeight.bold}*/}
		{/*						color={TypoColor.black}*/}
		{/*						onClick={() => history.push('/signup')}*/}
		{/*						style={{*/}
		{/*							cursor: 'pointer',*/}
		{/*							textAlign: 'center',*/}
		{/*						}}*/}
		{/*					>*/}
		{/*						Нет аккаунта?*/}
		{/*					</Typo>*/}
		{/*				</Form>*/}
		{/*			</>}*/}
		{/*		/>*/}


		{/*	</Main>*/}
		{/*	<Footer style={{flexDirection: 'row-reverse', padding: 8}}>*/}
		{/*		<Typo*/}
		{/*			// element="a"*/}
		{/*			href="/contact"*/}
		{/*			block*/}
		{/*			type={TypographyType.h5}*/}
		{/*			style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}*/}
		{/*		>*/}
		{/*			Свяжитесь с нами*/}
		{/*		</Typo>*/}
		{/*	</Footer>*/}

		{/*</PageContainer>*/}
	</BasePage>;
};

export default observer(LoginPage);