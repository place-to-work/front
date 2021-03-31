import * as React from 'react';
import './Header.scss';
import {CSSProperties} from 'react';

interface HeaderProps {
	addStyle?: CSSProperties;
}

const Header: React.FC<HeaderProps> = ({children, addStyle}) => (
	<header className="header" style={addStyle}>{children}</header>
);

export default Header;