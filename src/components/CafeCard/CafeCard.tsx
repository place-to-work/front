import * as React from 'react';
import './CafeCard.scss';
import Typo, {TypographyType} from '@components/primitives/Typo';
import {EarIcon, ElectricityIcon, IconColor, LightIcon, WifiIcon} from '@components/primitives/Icon';
import Separator from '@components/primitives/Separator';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/primitives/ImageCard';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';

export type CafeCardProps = {
	id?: string;
    imageSrc?: string;
    name?: string;
    address?: string;
    time?: string;
    images: string[];

    // Иконки
    wifi?:boolean;
    light?:boolean;
    electricity?:boolean;
    quiet?:string;

    // Подробная информация на странице кафе
	statuses?: string[];
	gallery?: string[];
	workLoad?: number;
	workLoadText?: string;
	averagePrice?: string;
	mapSrc?: string;
	className?: string;
};

const QUIET_PLACE = ['тихо','спокойно','тихонечко','клуб немых'];
const CafeCard: React.FC<CafeCardProps> = (
	{
		id,
		imageSrc = 'https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg',
		name = 'Заведение "Кафетерий"',
		address='ул. Пятницкая',
		time = '10:00 - 21:00',
		wifi = true,
		light = true,
		electricity = true,
		quiet,
		className
	}: CafeCardProps) => {
	const history = useHistory();
	return(

		<div className={cn('cafe-card', className)} style={{cursor: 'pointer'}} onClick={()=>{
			if(id){
				history.push(`/place/${id}`);
			}
		}}>
			<ImageCard
				style={{
					borderRadius: 0,
					width: 'calc(100% + 16px)',
					marginLeft: '-8px',
				}}
				imageSrc={imageSrc}
				scalable
			/>
			<div className="cafe-card__data">
				<Typo className="cafe-card__name" block type={TypographyType.h3}>{name}</Typo>
				<div className="cafe-card__description">
					<CafeInfo time={time} address={address}/>
					<div className="cafe-card__features">
						{wifi && <WifiIcon color={IconColor.black}/>}
						{light && <LightIcon color={IconColor.black}/>}
						{electricity && <ElectricityIcon color={IconColor.black} />}
						{QUIET_PLACE.indexOf(quiet.toLocaleLowerCase()) !== -1 && <EarIcon/>}
					</div>
				</div>
			</div>
			<Separator/>
		</div>
	);};

export default CafeCard;