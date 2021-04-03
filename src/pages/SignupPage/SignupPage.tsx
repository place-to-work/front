import React from 'react';
import * as Yup from 'yup';
import Typo, {
	TypoColor,
	TypographyType,
	TypoTextAlign,
	TypoVerticalAlign,
	TypoWeight,
} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/primitives/Button';
import './SignupPage.scss';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import Http from '@network/Http/Http';
import {useHistory} from 'react-router-dom';

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
		.min(8, 'Минимум 8 смволов')
		.required('Обязательное поле'),
});

const SignupPage: React.FC = () => {
	const history = useHistory();
	const onSubmit = (values: SignupValues) => {
		Http.fetchPost({
			path: '/users/',
			body: JSON.stringify(values),
		})
			.then((resp) => {
				history.push('/cafes');
			})
			.catch(console.log);
		console.log(`sum: ${JSON.stringify(values)}`);
	};

	return <>
		{/*{/*</PageContainer><PageContainer>*/}
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
		{/*		<Formik<SignupValues>*/}
		{/*			validationSchema={validationSchema}*/}
		{/*			initialValues={initialValues}*/}
		{/*			onSubmit={onSubmit}*/}
		{/*			render={(formikProps: FormikProps<SignupValues>) => <>*/}

		{/*				<Typo block type={TypographyType.h2}>Регистрация</Typo>*/}
		{/*				<Form>*/}
		{/*					<FormikInput*/}
		{/*						id="name"*/}
		{/*						title="Имя"*/}
		{/*						formikProps={formikProps}*/}
		{/*						placeholder="Введите свое имя"*/}
		{/*					/>*/}
		{/*					<FormikInput*/}
		{/*						id="email"*/}
		{/*						type="email"*/}
		{/*						title="Почта"*/}
		{/*						formikProps={formikProps}*/}
		{/*						placeholder="Введите свою почту"*/}
		{/*					/>*/}
		{/*					<FormikInput*/}
		{/*						id="password"*/}
		{/*						type="password"*/}
		{/*						title="Пароль"*/}
		{/*						formikProps={formikProps}*/}
		{/*						placeholder="Введите пароль"*/}
		{/*					/>*/}

		{/*					/!*<Typo*!/*/}
		{/*					/!*	block*!/*/}
		{/*					/!*	type={TypographyType.h6}*!/*/}
		{/*					/!*	color={TypoColor.darkGrey}*!/*/}
		{/*					/!*	textAlign={TypoTextAlign.center} // Почему то не работает*!/*/}
		{/*					/!*	verticalAlign={TypoVerticalAlign.baseline}*!/*/}
		{/*					/!*	style={{*!/*/}
		{/*					/!*		pointerEvents: 'none',*!/*/}
		{/*					/!*		cursor: 'not-allowed',*!/*/}
		{/*					/!*		textAlign: 'center',*!/*/}
		{/*					/!*	}}*!/*/}
		{/*					/!*>*!/*/}
		{/*					/!*	Забыли пароль?*!/*/}
		{/*					/!*</Typo>*!/*/}
		{/*					<Button*/}
		{/*						full*/}
		{/*						buttonSize={ButtonSize.classic}*/}
		{/*						style={{margin: '13px 0'}}>Зарегистрироваться*/}
		{/*					</Button>*/}
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


	</>;
};

export default SignupPage;