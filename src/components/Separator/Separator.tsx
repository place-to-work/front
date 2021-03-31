import * as React from 'react';
import './Separator.scss';
import cn from 'classnames';
type Props = {
    invisible?: boolean;
}
const Separator: React.FC<Props> = ({children, invisible = false}) =>(<div className={cn('separator', invisible && 'separator_invisible')}>{children}</div>);
export default Separator;