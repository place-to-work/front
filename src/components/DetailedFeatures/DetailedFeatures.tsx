import * as React from 'react';
import './DetailedFeatures.scss';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo from '@components/primitives/Typo';
import {EarIcon, ElectricityIcon, LightIcon, WifiIcon} from '@components/Icon';

const DetailedFeatures: React.FC<Partial<CafeCardProps>> = (
	{
		wifi,
		quiet,
		light,
		electricity,
		workLoad
	})=>(
	<div className="detailed-features">
		{wifi && <Typo className="detailed-features__item" icon={<WifiIcon/>}>Wi-Fi</Typo>}
		{electricity && <Typo className="detailed-features__item" icon={<ElectricityIcon/>}>Розетки</Typo>}
		{quiet && <Typo className="detailed-features__item" icon={<EarIcon/>}>Тихо</Typo>}
		{light && <Typo className="detailed-features__item" icon={<LightIcon/>}>Светло</Typo>}
		{workLoad && <Typo className="detailed-features__item"  icon={<LightIcon/>}>{workLoad} мест</Typo>}
		<div className="ghost"/>
	</div>);
export default DetailedFeatures;