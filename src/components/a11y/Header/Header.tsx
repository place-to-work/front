import * as React from 'react';
import './Header.scss';
import {CSSProperties} from 'react';

interface HeaderProps {
	addStyle?: CSSProperties;
}

const Header: React.FC<HeaderProps> = ({children, ...rest}) => (
	<header className="header" {...rest}>{children}</header>
);

export default Header;