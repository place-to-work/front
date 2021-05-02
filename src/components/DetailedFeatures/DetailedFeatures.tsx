import * as React from 'react';
import './DetailedFeatures.scss';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType, TypoWeight} from '@components/primitives/Typo';
import {EarIcon, ElectricityIcon, IconColor, LightIcon, PeopleIcon, WifiIcon} from '@components/primitives/Icon';

const DetailedFeatures: React.FC<Partial<CafeCardProps>> = (
	{
		wifi,
		quiet,
		light,
		electricity,
		workLoad,
		averagePrice

	})=>(
	<div className="detailed-features">
		{electricity && <Typo className="detailed-features__item" type={TypographyType.h5} icon={<ElectricityIcon color={IconColor.black}/>}>Розетки</Typo>}
		{wifi && <Typo className="detailed-features__item" type={TypographyType.h5} icon={<WifiIcon color={IconColor.black}/>}>Wi-Fi</Typo>}
		{averagePrice && <Typo className="detailed-features__item" type={TypographyType.h5} weight={TypoWeight.light}><Typo weight={TypoWeight.regular} type={TypographyType.h5}>{averagePrice}₽ </Typo>&nbsp;Средний чек</Typo>}
		<div className="ghost"/>
	</div>);
export default DetailedFeatures;