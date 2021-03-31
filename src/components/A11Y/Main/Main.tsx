import * as React from 'react';
import './Main.scss';
import {CSSProperties} from 'react';

interface MainProps {
	style?: CSSProperties;
}

const Main: React.FC<MainProps> = ({children, style}) => (
	<main className="main" style={style}>{children}</main>
);

export default Main;