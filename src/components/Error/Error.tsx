import React from 'react';
import Typo from '@components/primitives/Typo';

interface OwnProps {
	isShown: boolean;
	message: string;
}

const Error: React.FC<OwnProps> = ({isShown, message}) => {
	return isShown ? <Typo style={{color: 'red'}}>{message}</Typo> : <Typo/>;
}

export default Error;