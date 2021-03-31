import Typo, {TypographyType} from '@components/primitives/Typo';
import {ClockIcon, LocationIcon} from '@components/Icon';
import * as React from 'react';
import './CafeInfo.scss';

type Props = {
    address?: string;
    time?: string;
}
const CafeInfo:React.FC<Props> = ({address, time})=><div className="cafe-card__info">
	{ address &&<Typo icon={<LocationIcon/>} className="cafe-card__info-text" block type={TypographyType.h4}>{address}</Typo>}
	{ time && <Typo icon={<ClockIcon/>} className="cafe-card__info-text" block type={TypographyType.h4}>{time}</Typo>}
</div>;

export default CafeInfo;