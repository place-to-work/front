import React from 'react';
import * as Yup from 'yup';
import Header from '@components/a11y/Header';
import Main from '@components/a11y/Main';
import Footer from '@components/a11y/Footer';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoVerticalAlign, TypoWeight} from '@components/primitives/Typo';
import {Field, Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/primitives/Button';
import './SignupPage.scss';
import PageContainer from '@components/a11y/PageContainer';

interface SignupValues {
	name: '';
	email: string;
	password: string;
}

const initialValues: SignupValues = {
	name: '',
	email: '',
	password: '',
};

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Обязательное поле')
		.min(6, 'Минимум 6 символов'),
	email: Yup.string()
		.email('Неверная почта')
		.required('Обязательное поле'),
	password: Yup.string()
		.min(8, 'Минимум 6 смволов')
		.required('Обязательное поле'),
});

const SignupPage: React.FC = () => {
	const onSubmit = (values: SignupValues) => {
		console.log(`sum: ${JSON.stringify(values)}`);
	};

	return <>
		<PageContainer>
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
				<Formik<SignupValues>
					validationSchema={validationSchema}
					initialValues={initialValues}
					onSubmit={onSubmit}
					render={({errors, touched}: FormikProps<SignupValues>) => <>

						<Typo block type={TypographyType.h2}>Регистрация</Typo>
						<Form>
							<div className="input-container">
								<Typo type={TypographyType.h3} weight={TypoWeight.bold}>Имя</Typo>
								<Field
									className="input-field"
									id="name"
									name="name"
									placeholder="Введите свое имя"
								/>
								{errors.name && touched.name ? <div style={{color: 'red'}}>{errors.name}</div> : null}
							</div>
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

export default SignupPage;