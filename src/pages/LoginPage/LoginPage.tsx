import React from 'react';
import * as Yup from 'yup';
import './LoginPage.scss';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoVerticalAlign, TypoWeight} from '@components/Typo';
import {Field, Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/Button';


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
	initialValues.email = '';
	const onSubmit = (values: LoginValues) => {
		console.log(`sum: ${JSON.stringify(values)}`);
		values.email.trim();
	};

	return <>
		<div className="auth-page-container">
			<Header addStyle={{justifyContent: 'center', padding: 11}}>
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
					render={({errors, touched}: FormikProps<LoginValues>) => <>

						<Typo block type={TypographyType.h2}>Вход</Typo>
						<Form>
							<div className="input-container">
								<Typo type={TypographyType.h3} weight={TypoWeight.bold}>Почта</Typo>
								<Field
									className="input-field"
									id="email"
									name="email"
									placeholder="Введите свою почту"
								/>
								{errors.email && touched.email ? <div style={{color: 'red'}}>{errors.email}</div> : null}
							</div>
							<div className="input-container">
								<Typo type={TypographyType.h3} weight={TypoWeight.bold}>Пароль</Typo>
								<Field
									className="input-field"
									id="password"
									name="password"
									placeholder="Введите пароль"
								/>
								{errors.password && touched.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
							</div>
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
								Забили пароль?
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

		</div>
	</>;
};

export default LoginPage;