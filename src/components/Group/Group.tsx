import * as React from 'react';
import {useHistory} from 'react-router-dom';
import Typo, {TypographyType, TypoWeight} from '@components/primitives/Typo';
import './Group.scss';

export type GroupProps = {
    children?: React.ReactNode,
    title?: string;
};

const Group: React.FC<GroupProps> = ({ title, children }: GroupProps) => {
	const history = useHistory();
	if(!children){
		return null;
	}
	return(
		<div className="group">
			<Typo className="group__title" type={TypographyType.h2} weight={TypoWeight.regular}>{title}</Typo>
			{children}
		</div>
	);
};

export default Group;