import * as React from 'react';
import './DetailedFeatures.scss';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import {EarIcon, ElectricityIcon, IconColor, LightIcon, PeopleIcon, WifiIcon} from '@components/primitives/Icon';

const DetailedFeatures: React.FC<Partial<CafeCardProps>> = (
	{
		wifi,
		quiet,
		light,
		electricity,
		workLoad
	})=>(
	<div className="detailed-features">
		{wifi && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<WifiIcon color={IconColor.black}/>}>Wi-Fi</Typo>}
		{electricity && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<ElectricityIcon color={IconColor.black}/>}>Розетки</Typo>}
		{quiet && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<EarIcon color={IconColor.black}/>}>{quiet}</Typo>}
		{light && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<LightIcon color={IconColor.black}/>}>Светло</Typo>}
		{workLoad && <Typo className="detailed-features__item" type={TypographyType.h4}  icon={<PeopleIcon color={IconColor.black} />}>{workLoad} мест</Typo>}
		<div className="ghost"/>
	</div>);
export default DetailedFeatures;