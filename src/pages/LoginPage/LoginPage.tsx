import React from 'react';
import * as Yup from 'yup';
import './LoginPage.scss';
import Header from '@components/a11y/Header';
import Main from '@components/a11y/Main';
import Footer from '@components/a11y/Footer';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoVerticalAlign, TypoWeight} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/primitives/Button';
import PageContainer from '@components/a11y/PageContainer';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import Http from '@network/Http';
import {useHistory} from 'react-router-dom';


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
				if (!response.error) {
					history.push('/cafes');
				} else {
					response.json().then(console.log);
				}
			})
			.catch(console.log);

		console.log(`login: ${JSON.stringify(values)}`);
	};

	return <>
		<PageContainer>
			<Header style={{justifyContent: 'center', padding: 11}}>
				<Typo
					// element='a'
					block
					type={TypographyType.h3}
					href="/"
					style={{textDecoration: 'none'}}
				>
					Рабочее место
				</Typo>
			</Header>
			<Main style={{padding: 10, width: 360}}>
				<Formik<LoginValues>
					validationSchema={validationSchema}
					initialValues={initialValues}
					onSubmit={onSubmit}
					render={(formikProps: FormikProps<LoginValues>) => <>

						<Typo block type={TypographyType.h2}>Вход</Typo>
						<Form>
							<FormikInput
								id="email"
								placeholder="Введите вашу почту"
								formikProps={formikProps}
							/>
							<FormikInput
								id="password"
								placeholder="Введите пароль"
								formikProps={formikProps}
							/>
							<Typo
								block
								type={TypographyType.h6}
								color={TypoColor.darkGrey}
								textAlign={TypoTextAlign.center} // Почему то не работает
								verticalAlign={TypoVerticalAlign.baseline}
								style={{
									pointerEvents: 'none',
									cursor: 'not-allowed',
									textAlign: 'center',
								}}
							>
								Забыли пароль?
							</Typo>
							<Button
								full
								buttonSize={ButtonSize.classic}
								style={{margin: '13px 0'}}>Войти</Button>
							<Typo
								block
								type={TypographyType.h5}
								// textAlign={TypoTextAlign.center} не работает ...
								weight={TypoWeight.bold}
								color={TypoColor.black}
								style={{
									pointerEvents: 'none',
									cursor: 'not-allowed',
									textAlign: 'center',
								}}
							>
								Нет аккаунта?
							</Typo>
						</Form>
					</>}
				/>


			</Main>
			<Footer style={{flexDirection: 'row-reverse', padding: 8}}>
				<Typo
					// element="a"
					href="/contact"
					block
					type={TypographyType.h5}
					style={{marginRight: 'calc(50% - 170px)'}}
				>
					Свяжитесь с нами
				</Typo>
			</Footer>

		</PageContainer>
	</>;
};

export default LoginPage;