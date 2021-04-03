import React from 'react';
import * as Yup from 'yup';
import './LoginPage.scss';
import Http from '@network/Http';
import {useHistory} from 'react-router-dom';
import IconCenter from '@components/primitives/Icon/Icon';
import {IconSize, IconType} from '@components/primitives/Icon';
import BasePage from '@pages/BasePage';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import {Formik, Form, FormikProps} from 'formik';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import Button, {ButtonSize} from '@components/primitives/Button';
import Error from '@components/Error';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';


interface LoginValues {
	email: string;
	password: string;
}

const initialValues: LoginValues = {
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
	const onSubmit = (values: LoginValues) => {
		Http.fetchPost({
			path: '/users/login/',
			body: JSON.stringify(values),
		})
			.then((response) => {
				if (response.ok) {
					history.push('/places');
				} else {
					response.json().then(console.log);
				}
			})
			.catch(console.log);

		console.log(`login: ${JSON.stringify(values)}`);
	};

	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		Свяжитесь с нами
	</Typo>;

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{
			body: () => <Formik<LoginValues>
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={onSubmit}
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

export default LoginPage;