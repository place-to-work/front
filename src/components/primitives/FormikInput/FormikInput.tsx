import React from 'react';
import Typo, {TypographyType, TypoWeight} from '@components/primitives/Typo';
import {Field, FormikProps} from 'formik';


interface FormikInputProps {
	id: string;
	type?: string;
	name?: string;
	title?: string;
	placeholder?: string;
	formikProps: FormikProps<any>;
}

export const FormikInput: React.FC<FormikInputProps> = ({
	id,
	title,
	name = id,
	formikProps,
	...rest
}) => {
	const {errors, touched} = formikProps;
	return <div className="input-container">
		{title && <Typo type={TypographyType.h3} weight={TypoWeight.bold}>{title}</Typo>}
		<Field
			className="input-field"
			id={id}
			name={name}
			{...rest}
		/>
		{errors[name] && touched[name] ? <div style={{color: 'red'}}>{errors[name]}</div> : null}
	</div>;
};
