import * as React from 'react';
import './Separator.scss';
import cn from 'classnames';
import {CSSProperties} from 'react';
type Props = {
    invisible?: boolean;
    style?: CSSProperties;
}
const Separator: React.FC<Props> = ({children, invisible = false, ...rest}) =>(
	<div
		className={cn('separator', invisible && 'separator_invisible')}
		{...rest}
	>
		{children}
	</div>
);
export default Separator;