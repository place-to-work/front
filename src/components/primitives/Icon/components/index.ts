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
	backIcon = 'backIcon'

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


};

export {
	BaseIcon,
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

};
