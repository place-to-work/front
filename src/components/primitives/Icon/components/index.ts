import * as React from 'react';

import BaseIcon, { BaseIconProps } from './BaseIcon';
import LocationIcon from './LocationIcon';
import ClockIcon from './ClockIcon';
import IconLeft from '@components/primitives/Icon/components/IconLeft';
import IconCenter from '@components/primitives/Icon/components/IconCenter';
import WifiIcon from '@components/primitives/Icon/components/WiFIIcon';
import LightIcon from '@components/primitives/Icon/components/LightIcon';
import ElectricityIcon from '@components/primitives/Icon/components/ElectricityIcon';
import EarIcon from '@components/primitives/Icon/components/EarIcon';
import PeopleIcon from "@components/primitives/Icon/components/PeopleIcon";
import BackIcon from "@components/primitives/Icon/components/BackIcon";
import ApplePayIcon from "@components/primitives/Icon/components/ApplePay";
import ArrowDirIcon from "@components/primitives/Icon/components/ArrowDirIcon";
import BankIcon from "@components/primitives/Icon/components/BankIcon";
import SberIcon from "@components/primitives/Icon/components/SberIcon";
import YouMoneyIcon from "@components/primitives/Icon/components/YouMoneyIcon"
import GooglePayIcon from "@components/primitives/Icon/components/GooglePayIcon";
export * from './BaseIcon';


export * from './config';

export enum IconType {
  location = 'location',
  clock = 'clock',
  wifi = 'wifi',
  ear = 'ear',
  electricity = 'electricity',
  light = 'light',
  iconLeft = 'iconLeft',
  iconCenter = 'iconCenter',
  peopleIcon = 'peopleIcon',
	backIcon = 'backIcon',
	applePay = 'applePay',
  	googlePay = 'googlePay',
	bankIcon = 'backIcon',
	sberIcon = 'sberIcon',
	youMoney = 'youMoney'

}

export const iconEntities: Record<
  IconType,
  React.ComponentType<BaseIconProps>
> = {
	[IconType.location]: LocationIcon,
	[IconType.clock]: ClockIcon,
	[IconType.wifi]: WifiIcon,
	[IconType.light]: LightIcon,
	[IconType.electricity]: ElectricityIcon,
	[IconType.ear]: EarIcon,
	[IconType.iconLeft]:IconLeft,
	[IconType.iconCenter]:IconCenter,
	[IconType.peopleIcon]:PeopleIcon,
	[IconType.backIcon]: BackIcon,
	[IconType.applePay]: ApplePayIcon,
	[IconType.backIcon]: BankIcon,
	[IconType.sberIcon]: SberIcon,
	[IconType.youMoney]: YouMoneyIcon,
	[IconType.googlePay]: GooglePayIcon

};

export {
	BaseIcon,
	ArrowDirIcon,
	LocationIcon,
	ClockIcon,
	WifiIcon,
	LightIcon,
	ElectricityIcon,
	EarIcon,
	IconLeft,
	IconCenter,
	PeopleIcon,
	BackIcon,
	ApplePayIcon,
	GooglePayIcon,
	BankIcon,
	SberIcon,
	YouMoneyIcon

};
