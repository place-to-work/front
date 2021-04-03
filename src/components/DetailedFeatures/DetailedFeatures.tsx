import * as React from 'react';
import './DetailedFeatures.scss';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import {EarIcon, ElectricityIcon, LightIcon, PeopleIcon, WifiIcon} from '@components/primitives/Icon';

const DetailedFeatures: React.FC<Partial<CafeCardProps>> = (
	{
		wifi,
		quiet,
		light,
		electricity,
		workLoad
	})=>(
	<div className="detailed-features">
		{wifi && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<WifiIcon/>}>Wi-Fi</Typo>}
		{electricity && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<ElectricityIcon/>}>Розетки</Typo>}
		{quiet && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<EarIcon/>}>{quiet}</Typo>}
		{light && <Typo className="detailed-features__item" type={TypographyType.h4} icon={<LightIcon/>}>Светло</Typo>}
		{workLoad && <Typo className="detailed-features__item" type={TypographyType.h4}  icon={<PeopleIcon/>}>{workLoad} мест</Typo>}
		<div className="ghost"/>
	</div>);
export default DetailedFeatures;