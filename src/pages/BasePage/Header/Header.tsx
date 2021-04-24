import * as React from 'react';
import {CSSProperties} from 'react';
import './Header.scss';
import cn from 'classnames';

export interface HeaderProps {
	left?: () => React.ReactElement,
	middle?: () => React.ReactElement,
	right?: () => React.ReactElement,
	style?: CSSProperties;
	transparent?: boolean;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({
	left = () => <div style={{visibility: 'hidden'}}/>,
	right = () => <div style={{visibility: 'hidden'}}/>,
	middle = () => <div style={{visibility: 'hidden'}}/>,
	transparent = false, className,
	...rest
}) => (
	<header className={cn('header', !transparent && 'header-bordered' , className)} {...rest}>
		{left && left()}
		{middle && middle()}
		{right && right()}
	</header>
);

export default Header;