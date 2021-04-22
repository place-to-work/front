import * as React from 'react';
import './Main.scss';
import {CSSProperties} from 'react';
import {observer} from 'mobx-react-lite';

export interface MainProps {
	style?: CSSProperties;
	body?: () => React.ReactElement;
	className?: string;
}

const Main: React.FC<MainProps> = ({body, ...rest}) => <main className="main" {...rest}>{body && body()}</main>;

export default observer(Main);