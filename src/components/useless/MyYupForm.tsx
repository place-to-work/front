import React from 'react';
import {
	Formik,
	Form,
	Field,
} from 'formik';
import * as Yup from 'yup';

interface MyFormValues {
	firstName: string;
	password: string;
}

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('required!!!'),
	password: Yup.string()
		.min(8, 'must be more than 8')
		.required('Сдурел чтоли?!'),
});

export const MyYupForm: React.FC = () => {
	const initialValues: MyFormValues = {
		firstName: 'wow',
		password: '',
	};

	return (
		<div>
			<h1>My Yup Form</h1>
			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					console.log({values, actions});
					console.log(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}
			>
				{
					({errors, touched}) => <Form>
						<label htmlFor="firstName">First Name</label>
						<Field id="firstName" name="firstName" placeholder="First Name"/>
						{errors.firstName && touched.firstName ? (
							<div>{errors.firstName}</div>
						) : null}
						<label htmlFor="password">Password</label>
						<Field id="password" name="password" placeholder="Password"/>
						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}
						<button type="submit">Submit</button>
					</Form>
				}

			</Formik>
		</div>
	);
};
