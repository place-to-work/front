import React from 'react';
import {
	Formik,
	Form,
	Field,
} from 'formik';

interface MyFormValues {
	firstName: string;
	password: string;
}

export const MyFirstForm: React.FC = () => {
	const initialValues: MyFormValues = {
		firstName: 'wow',
		password: '',
	};

	return (
		<div>
			<h1>My First Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					console.log({values, actions});
					console.log(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}
			>
				<Form>
					<label htmlFor="firstName">First Name</label>
					<Field id="firstName" name="firstName" placeholder="First Name"/>
					<label htmlFor="password">Password</label>
					<Field id="password" name="password" placeholder="Password"/>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};
