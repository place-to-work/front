import React from 'react';
import Typo, {TypographyType, TypoWeight} from '@components/primitives/Typo';
import {Field, FormikProps} from 'formik';


interface FormikInputProps {
	id: string;
	name?: string;
	placeholder?: string;
	formikProps: FormikProps<any>;
}

export const FormikInput: React.FC<FormikInputProps> = ({
	id,
	name = id,
	placeholder,
	formikProps
}) => {
	const {errors, touched} = formikProps;
	return <div className="input-container">
		<Typo type={TypographyType.h3} weight={TypoWeight.bold}>Почта</Typo>
		<Field
			className="input-field"
			id={id}
			name={name}
			placeholder={placeholder}
		/>
		{errors[name] && touched[name] ? <div style={{color: 'red'}}>{errors[name]}</div> : null}
	</div>;
};
