import * as React from 'react';
import './Footer.scss';
import {CSSProperties} from 'react';

interface FooterProps {
	style?: CSSProperties;
}

const Footer: React.FC<FooterProps> = ({children, style}) => (
	<footer className="footer" style={style}>{children}</footer>
);

export default Footer;