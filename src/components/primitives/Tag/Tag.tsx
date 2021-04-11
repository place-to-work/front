import * as React from 'react';
import './Tag.scss';
import cn from 'classnames';
import {ButtonColor} from '@components/primitives/Button';

type TagProps = {
    color?: ButtonColor;
    onClick?: () => void;
	className?: string;
}
const Tag: React.FC<TagProps> = ({
	children,
	color = ButtonColor.accentGrey,
	onClick,
	className
}) =>(
	<div onClick={onClick} className={cn('tag',color && `tag_${color}`,className )}>
		{children}
	</div>);
export default Tag;