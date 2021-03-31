import * as React from 'react';
import './Header.scss';
import {CSSProperties} from 'react';
import {IconCenter, IconLeft} from "@components/primitives/Icon";

export enum HeaderType {
	center = 'center',
	left = 'left'
}
interface HeaderProps {
	style?: CSSProperties;
	type?: HeaderType;
	withBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({withBack = false, type = HeaderType.center, ...rest}) => (
	<header className="header" {...rest}>
		{type === HeaderType.center ? <IconCenter className="icon-center"/> :
		<>
			{withBack ? <IconLeft/> : <IconLeft/>}
		</>}
	</header>
);

export default Header;