import cn from 'classnames';
import * as React from 'react';
import { Link, NavLinkProps } from 'react-router-dom';
import { withProps } from 'recompose';
import { ButtonColor, ButtonSize } from './config';
import './Button.scss';

export type ButtonAProps = {
  element: 'a';
} & React.HTMLProps<HTMLAnchorElement>;

export type ButtonButtonProps = {
  element: 'button';
} & React.HTMLProps<HTMLButtonElement>;

export type ButtonCommonProps = {
  element?: null | string;
} & React.HTMLProps<HTMLElement>;

type ButtonNavProps = {
  element: React.ComponentType<NavLinkProps>;
} & NavLinkProps;

type ButtonBase =
  | ButtonAProps
  | ButtonButtonProps
  | ButtonCommonProps
  | ButtonNavProps;

export type BaseButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  full?: boolean;
  buttonSize?: ButtonSize;
  color?: ButtonColor;
  withBorder?: boolean;
  isLoading?: boolean;
};

export type ButtonProps = BaseButtonProps & ButtonBase;

const Button: React.FC<ButtonProps> = ({
	element = null,
	disabled = false,
	full = false,
	buttonSize = ButtonSize.xl,
	color = ButtonColor.accent,
	withBorder = true,
	className,
	children,
	...extraProps
}: ButtonProps) => {
	const Element = React.useMemo(
		() => element ||
      (extraProps.href ? withProps({ to: extraProps.href })(Link) : 'button'),
		[element, extraProps.href]
	);



	return (
		// @ts-ignore
		<Element
			className={cn(
				'button',
				full && 'button_full',
				`button_size_${buttonSize}`,
				`button_type_${color}`,
				disabled && 'button_disabled',
				extraProps.href && 'button_link',
				withBorder && 'button_bordered',
				className
			)}
			{...extraProps}
		>
			{children && <div className="button__item">{children}</div>}
		</Element>
	);
};

export default Button;
