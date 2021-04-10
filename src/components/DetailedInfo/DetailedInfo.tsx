import * as React from 'react';
import './DetailedInfo.scss';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Separator from '@components/primitives/Separator';
import Tag from '@components/primitives/Tag';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/primitives/ImageCard';
import DetailedFeatures from '@components/DetailedFeatures';
import Button, {ButtonColor} from '@components/primitives/Button';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export type CafeCardProps = {
    imageSrc?: string;
    name?: string;
    address?: string;
    time?: string;

    // Иконки
    wifi?:boolean;
    light?:boolean;
    electricity?:boolean;
    quiet?:string;

    // Подробная информация на странице кафе
    statuses?: string[];
    gallery?: string[];
    images?: string[];
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
		quiet,
		statuses = ['Булочная, пекарня','Кофейня'],
		images = [],
		gallery = ['https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg','https://p0.zoon.ru/b/0/4f85bd4b3c72dd81140000ef_5d1b13463ca0a.jpg'],
		workLoad = 20,
		workLoadText = 'средняя',
		averagePrice = '1000Р',
		mapSrc = 'https://www.google.ru/maps/place/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/@55.7542657,37.6106779,15z/data=!3m1!4b1!4m5!3m4!1s0x46b54a5c6ae39171:0x95bf7ced8fea5cc1!8m2!3d55.7521239!4d37.6211384?hl=ru',

	}: CafeCardProps) => (
	<div className="cafe-detailed-info">
		<div style={{width:'90vw', display: 'inline', margin:'auto'}}>

			<Splide options={ {
				type : 'loop',
				gap : '0.5rem',
				arrows : false,
				padding: '0.5rem',
				autoplay: true,
				// height: '30vh',
				focus    : 'center',
				perPage  : 1,
				trimSpace: true,
			}
			}>
				{images.map((image, index)=><SplideSlide key={index}>
					<ImageCard imageSrc={image}/>
				</SplideSlide>)}
			</Splide>
		</div>
		<Typo className="cafe-detailed-info__name" block type={TypographyType.h1}>{name}</Typo>
		<div className="cafe-detailed-info__statuses">
			{statuses?.map((status:string, index:number)=><Tag key={index}>
				<Typo type={TypographyType.h5} color={TypoColor.black}>{status}</Typo>
			</Tag>)}
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
		{ workLoadText && <Typo type={TypographyType.h4} block>Загруженность:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{workLoadText}</Typo></Typo>}
		{ averagePrice && <Typo type={TypographyType.h4} block>Средний счет:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{averagePrice} </Typo></Typo>}
		<Separator invisible/>
		{mapSrc && <Button
			className="cafe-detailed-info__button"
			full color={ButtonColor.accentGrey} onClick={()=>window.open(mapSrc, '_blank')}>
			<Typo type={TypographyType.h3} weight={TypoWeight.semiBold}  color={TypoColor.black}>Открыть в картах
			</Typo>
		</Button>
		}
	</div>
);

export default DetailedInfo;