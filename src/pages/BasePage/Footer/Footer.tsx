import * as React from 'react';
import './Footer.scss';
import {CSSProperties} from 'react';

export interface FooterProps {
	left?: () => React.ReactElement,
	middle?: () => React.ReactElement,
	right?: () => React.ReactElement,
	style?: CSSProperties;
	className?: string;
}

const Footer: React.FC<FooterProps> = ({
	left = () => <div style={{visibility: 'hidden'}}/>,
	middle = () => <div style={{visibility: 'hidden'}}/>,
	right = () => <div style={{visibility: 'hidden'}}/>,
	...rest
}) => (
	<footer className="footer" {...rest}>
		{left()}
		{middle()}
		{right()}
	</footer>
);

export default Footer;