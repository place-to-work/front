import * as React from 'react';
import './Main.scss';
import {CSSProperties} from 'react';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

export interface MainProps {
	style?: CSSProperties;
	body?: () => React.ReactElement;
	className?: string;
}

const Main: React.FC<MainProps> = ({body, className, ...rest}) => <main className={cn('main', className)} {...rest}>{body && body()}</main>;

export default observer(Main);