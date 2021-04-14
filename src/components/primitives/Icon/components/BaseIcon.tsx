import cn from 'classnames';
import * as React from 'react';
import { IconColor, IconSize } from './config';
import './Icon.scss';
import {CSSProperties} from 'react';

export type BaseIconProps = {
  size?: IconSize;
  className?: string;
  color?: IconColor;
  onClick?: React.SVGAttributes<SVGElement>['onClick'];
  style?: CSSProperties;
};

type Props = BaseIconProps & React.SVGAttributes<SVGElement>;

const BaseIcon: React.FC<Props> = ({
	className,
	size = IconSize.m,
	children,
	onClick,
	color = IconColor.currentColor,
	...svgProps
}: Props) => (
	<svg
		onClick={onClick || undefined}
		className={cn(
			'icon',
			size && `icon_size-${size}`,
			color && color !== IconColor.currentColor && `icon_color-${color}`
			,className)}
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		{...svgProps}
	>
		{children}
	</svg>
);

export default React.memo<Props>(BaseIcon);
