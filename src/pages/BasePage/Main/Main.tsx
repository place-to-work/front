import * as React from 'react';
import './Main.scss';
import {CSSProperties} from 'react';

export interface MainProps {
	style?: CSSProperties;
	body?: () => React.ReactElement;
}

const Main: React.FC<MainProps> = ({body, ...rest}) => (
	<main className="main" {...rest}>{body && body()}</main>
);

export default Main;