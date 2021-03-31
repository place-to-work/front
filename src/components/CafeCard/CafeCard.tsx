import * as React from 'react';
import './CafeCard.scss';
import Typo, {TypographyType} from '@components/Typo';
import { EarIcon, ElectricityIcon, LightIcon, WifiIcon} from '@components/Icon';
import Separator from '@components/Separator';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/ImageCard';

export type CafeCardProps = {
    imageSrc?: string;
    name?: string;
    address?: string;
    time?: string;

    // Иконки
    wifi?:boolean;
    light?:boolean;
    electricity?:boolean;
    quiet?:boolean;

    // Подробная информация на странице кафе
	statuses?: string[];
	gallery?: string[];
	workLoad?: number;
	workLoadText?: string;
	averagePrice?: string;
	mapSrc?: string;

};

const CafeCard: React.FC<CafeCardProps> = (
	{
		imageSrc = 'https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg',
		name = 'Заведение "Кафетерий"',
		address='ул. Пятницкая',
		time = '10:00 - 21:00',
		wifi = true,
		light = true,
		electricity = true,
		quiet = true
	}: CafeCardProps) => (
	<div className="cafe-card">
		<ImageCard imageSrc={imageSrc} />
		<div className="cafe-card__data">
			<Typo className="cafe-card__name" block type={TypographyType.h3}>{name}</Typo>
			<div className="cafe-card__description">
				<CafeInfo time={time} address={address}/>
				<div className="cafe-card__features">
					{wifi && <WifiIcon/>}
					{light && <LightIcon/>}
					{electricity && <ElectricityIcon/>}
					{quiet && <EarIcon/>}
				</div>
			</div>
		</div>
		<Separator/>
	</div>
);

export default CafeCard;