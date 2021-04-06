import * as React from 'react';
import {CSSProperties} from 'react';
import './Header.scss';

export interface HeaderProps {
	left?: () => React.ReactElement,
	middle?: () => React.ReactElement,
	right?: () => React.ReactElement,
	style?: CSSProperties;
}

const Header: React.FC<HeaderProps> = ({
	left = () => <div style={{visibility: 'hidden'}}/>,
	right = () => <div style={{visibility: 'hidden'}}/>,
	middle = () => <div style={{visibility: 'hidden'}}/>,
	...rest
}) => (
	<header className="header" {...rest}>
		{left && left()}
		{middle && middle()}
		{right && right()}
	</header>
);

export default Header;