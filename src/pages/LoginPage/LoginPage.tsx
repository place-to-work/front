import React from 'react';
import * as Yup from 'yup';
import './LoginPage.scss';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import {FormikInput} from '@components/primitives/FormikInput/FormikInput';
import Button, {ButtonSize} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import {observer} from 'mobx-react-lite';
import t, {Phrase} from '@models/Translate';
import User from '@models/User';

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

	const ContactUs = <Typo
		block
		type={TypographyType.h5}
		style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	>
		{t(Phrase.contactUs)}
	</Typo>;

	React.useEffect(()=>{
		if(User.isAuthenticated){
			history.push('/places');
		}
	},[User.id]);

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{
			body: () => <Formik<LoginValues>
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={User.login}
				render={(formikProps: FormikProps<LoginValues>) => <>

					<Typo block type={TypographyType.h1}>{t(Phrase.login)}</Typo>
					<Form>
						<FormikInput
							id="email"
							type="email"
							title={t(Phrase.email)}
							placeholder={t(Phrase.inputEmail)}
							formikProps={formikProps}
						/>
						<FormikInput
							id="password"
							title={t(Phrase.password)}
							type="password"
							placeholder={t(Phrase.inputPassword)}
							formikProps={formikProps}
						/>
						<Button
							full
							buttonSize={ButtonSize.classic}
							style={{margin: '13px 0'}}
						>
							{t(Phrase.loginAction)}
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
							{t(Phrase.noAccount)}
						</Typo>
					</Form>
				</>}
			/>,
		}}
		footerProps={{right: () => ContactUs}}
	/>;
};

export default observer(LoginPage);