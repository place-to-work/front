import React from 'react';
import * as Yup from 'yup';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/primitives/Button';
import './SignupPage.scss';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {observer} from 'mobx-react-lite';
import t, {Phrase} from '@models/Translate';
import User from '@models/User';
import Contact from '@components/Contact';

export interface SignupValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const initialValues: SignupValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Обязательное поле')
		.min(1, 'Минимум 1 символ'),
	email: Yup.string()
		.email('Неверная почта')
		.required('Обязательное поле'),
	password: Yup.string()
		.min(8, 'Минимум 8 символов')
		.required('Обязательное поле'),
	confirmPassword: Yup.string()
		.required('Обязательное поле')
		.oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});

const SignupPage: React.FC = () => {
	const history = useHistory();

	React.useEffect(()=>{
		if(User.isAuthenticated){
			history.push('/places');
		}
	},[User.id]);

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{body: () => <Formik
			validationSchema={validationSchema}
			initialValues={initialValues}
			onSubmit={((values) => {
				User.register(values)
					.then((result) => {
						if (result === null) return null;
						history.push('/places');
					});
			})}
			render={(formikProps: FormikProps<SignupValues>) => <>

				<Typo block type={TypographyType.h1}>{t(Phrase.register)}</Typo>
				<Form>
					<FormikInput
						id="name"
						title={t(Phrase.name)}
						formikProps={formikProps}
						placeholder={t(Phrase.inputName)}
					/>
					<FormikInput
						id="email"
						type="email"
						title={t(Phrase.email)}
						formikProps={formikProps}
						placeholder={t(Phrase.inputEmail)}
					/>
					<FormikInput
						id="password"
						type="password"
						title={t(Phrase.password)}
						formikProps={formikProps}
						placeholder={t(Phrase.inputPassword)}
					/>
					<FormikInput
						id="confirm-password"
						type="password"
						title={t(Phrase.confirmPassword)}
						formikProps={formikProps}
						placeholder={t(Phrase.inputConfirmPassword)}
					/>
					{/*<Typo*/}
					{/*	block*/}
					{/*	type={TypographyType.h6}*/}
					{/*	color={TypoColor.darkGrey}*/}
					{/*	textAlign={TypoTextAlign.center}*/}
					{/*	verticalAlign={TypoVerticalAlign.baseline}*/}
					{/*	style={{*/}
					{/*		pointerEvents: 'none',*/}
					{/*		cursor: 'not-allowed',*/}
					{/*	}}*/}
					{/*>*/}
					{/*	Забыли пароль?*/}
					{/*</Typo>*/}
					<Button
						full
						buttonSize={ButtonSize.classic}
						style={{margin: '13px 0'}}
					>
						{t(Phrase.registerAction)}
					</Button>
					<Typo
						block
						type={TypographyType.h5}
						textAlign={TypoTextAlign.center}
						weight={TypoWeight.bold}
						color={TypoColor.black}
						onClick={() => history.push('/login')}
						style={{
							cursor: 'pointer',
						}}
					>
						{t(Phrase.haveAccount)}
					</Typo>
				</Form>
			</>}
		/>}}
		footerProps={{right: () => <Contact/>}}
	/>;
};

export default observer(SignupPage);