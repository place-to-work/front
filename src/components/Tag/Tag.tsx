import * as React from 'react';
import './Tag.scss';
import cn from 'classnames';
import Typo, {TypoColor, TypographyType} from '@components/Typo';
import {ButtonColor} from '@components/Button';

type TagProps ={
    color?: ButtonColor
}
const Tag: React.FC<TagProps> = ({children, color = ButtonColor.accentGrey}) =>(
	<div className={cn('tag',color && `tag_${color}` )}><Typo type={TypographyType.h6} color={TypoColor.black}>{children}</Typo></div>);
export default Tag;