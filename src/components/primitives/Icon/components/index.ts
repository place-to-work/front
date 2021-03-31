import * as React from 'react';

import BaseIcon, { BaseIconProps } from './BaseIcon';
import LocationIcon from './LocationIcon';
import ClockIcon from './ClockIcon';
import WifiIcon from '@components/Icon/components/WiFIIcon';
import LightIcon from '@components/Icon/components/LightIcon';
import ElectricityIcon from '@components/Icon/components/ElectricityIcon';
import EarIcon from '@components/Icon/components/EarIcon';
import IconLeft from '@components/Icon/components/IconLeft';
import IconCenter from '@components/Icon/components/IconCenter';


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
  iconCenter = 'iconCenter'
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
	[IconType.iconCenter]:IconCenter


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
	IconCenter

};
