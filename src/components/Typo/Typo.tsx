import cn from 'classnames';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import {
	TypographyType,
	TypoColor,
	TypoVerticalAlign,
	TypoWeight
} from './config';
import './Typo.scss';

export type TypoAProps = {
    element: 'a';
    target?: React.HTMLProps<HTMLAnchorElement>['target'];
    rel?: React.HTMLProps<HTMLAnchorElement>['rel'];
    href?: React.HTMLProps<HTMLAnchorElement>['href'];
};

export type TypoLinkProps = {
    element: typeof Link;
    to: LinkProps['to'];
};

export type TypoCommonProps = {
    element?: 'span';
};

type TypoBase = TypoAProps | TypoLinkProps | TypoCommonProps;

export type TypoProps = {
    type?: TypographyType;
    color?: TypoColor;
    weight?: TypoWeight;
    upperFirst?: boolean;
    verticalAlign?: TypoVerticalAlign;
    icon?: React.ReactNode;
    /**
     * Добавляет display: block;
     */
    block?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
} & TypoBase;

const Typo: React.FC<TypoProps> = ({
	type,
	children,
	color,
	weight,
	verticalAlign,
	icon = null,
	className,
	block = false,
	element: Element = 'span',
	onClick,
	...additionalProps
}: TypoProps) => (
	// eslint-disable-next-line
	<Element
		className={cn(
			'typo',
			color && `typo_color-${color}`,
			weight && `typo_weight-${weight}`,
			type && `typo_${type}`,
			verticalAlign && `typo_align-${verticalAlign}`,
			block && 'typo_block',
			className
		)}
		onClick={onClick}
		{...additionalProps}
	>
		{icon && (
			<div className={cn('typo__icon')}>
				{icon}
			</div>
		)}
		{children}
	</Element>
);

export default Typo;