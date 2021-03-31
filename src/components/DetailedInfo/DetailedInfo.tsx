import * as React from 'react';
import './DetailedInfo.scss';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Separator from '@components/primitives/Separator';
import Tag from '@components/primitives/Tag';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/primitives/ImageCard';
import DetailedFeatures from '@components/DetailedFeatures';
import Button, {ButtonColor} from '@components/primitives/Button';

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

const DetailedInfo: React.FC<CafeCardProps> = (
	{
		imageSrc = 'https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg',
		name = 'Заведение "Кафетерий"',
		address='ул. Пятницкая',
		time = '10:00 - 21:00',
		wifi = true,
		light = true,
		electricity = true,
		quiet = true,
		statuses = ['Булочная, пекарня','Кофейня'],
		//gallery = ['https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg','https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg'],
		workLoad = 20,
		workLoadText = 'средняя',
		averagePrice = '1000Р',
		mapSrc = 'https://www.google.ru/maps/place/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/@55.7542657,37.6106779,15z/data=!3m1!4b1!4m5!3m4!1s0x46b54a5c6ae39171:0x95bf7ced8fea5cc1!8m2!3d55.7521239!4d37.6211384?hl=ru',

	}: CafeCardProps) => (
	<div className="cafe-detailed-info">
		<ImageCard imageSrc={imageSrc}/>
		<Typo className="cafe-detailed-info__name" block type={TypographyType.h3}>{name}</Typo>
		<div className="cafe-detailed-info__statuses">
			{statuses?.map((status:string, index:number)=><Tag key={index}>{status}</Tag>)}
		</div>
		<Separator/>
		<CafeInfo address={address} time={time}/>
		<Separator/>
		<DetailedFeatures
			wifi={wifi}
			light={light}
			electricity={electricity}
			quiet={quiet}
			workLoad={workLoad}
		/>
		<Separator/>
		{ workLoadText && <Typo block>Загруженность:{' '}<Typo weight={TypoWeight.semiBold}>{workLoadText}</Typo></Typo>}
		{ averagePrice && <Typo block>Средний счет:{' '}<Typo weight={TypoWeight.semiBold}>{averagePrice}</Typo></Typo>}
		<Separator invisible/>
		{mapSrc && <Button full color={ButtonColor.accentGrey} onClick={()=>window.open(mapSrc, "_blank")}>
			{/* todo Добавить ссылку */}
			<Typo type={TypographyType.h3} color={TypoColor.black}>Открыть в картах
			</Typo>
		</Button>
		}
	</div>
);

export default DetailedInfo;