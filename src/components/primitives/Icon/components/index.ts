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
