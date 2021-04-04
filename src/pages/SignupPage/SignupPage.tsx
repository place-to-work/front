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
import BasePage from '@pages/BasePage';
import IconCenter from '@components/primitives/Icon/Icon';
import {IconSize, IconType} from '@components/primitives/Icon';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {observer} from "mobx-react-lite";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";
import {UserCategory} from "../../mobx/local/UserStore/types";

export interface SignupValues {
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

	const store = useLocalStore(() => new UserStore());


	React.useEffect(()=>{
		console.log('user effect',{user: store.user})
		if(store.user.id !== -1){

			if(store.user.type == UserCategory.client){
				history.push('/places')
			} else if(store.user.type === UserCategory.staff){
				history.push('/staff')
			}

		}
	},[store.user])

	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		Свяжитесь с нами
	</Typo>;

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{body: () => <Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={store.regUser}
				render={(formikProps: FormikProps<SignupValues>) => <>

					<Typo block type={TypographyType.h1}>Регистрация</Typo>
					<Form>
						<FormikInput
							id="name"
							title="Имя"
							formikProps={formikProps}
							placeholder="Введите свое имя"
						/>
						<FormikInput
							id="email"
							type="email"
							title="Почта"
							formikProps={formikProps}
							placeholder="Введите свою почту"
						/>
						<FormikInput
							id="password"
							type="password"
							title="Пароль"
							formikProps={formikProps}
							placeholder="Введите пароль"
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
							style={{margin: '13px 0'}}>Зарегистрироваться
						</Button>
					</Form>
				</>}
			/>}}
		footerProps={{right: () => ContactUs}}
	/>;
};

export default observer(SignupPage);