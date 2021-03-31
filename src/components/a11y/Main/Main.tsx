import * as React from 'react';
import './Main.scss';
import {CSSProperties} from 'react';

interface MainProps {
	style?: CSSProperties;
}

const Main: React.FC<MainProps> = ({children, ...rest}) => (
	<main className="main" {...rest}>{children}</main>
);

export default Main;