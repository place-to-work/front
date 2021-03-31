import * as React from 'react';
import './Footer.scss';
import {CSSProperties} from 'react';

interface FooterProps {
	style?: CSSProperties;
}

const Footer: React.FC<FooterProps> = ({children, ...rest}) => (
	<footer className="footer" style={...rest}>{children}</footer>
);

export default Footer;