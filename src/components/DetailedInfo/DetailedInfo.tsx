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
import {useWidth} from '@utils/devices';

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
		name = 'Заведение "Кафетерий"',
		address='',
		time = '10:00 - 21:00',
		wifi = true,
		light = true,
		electricity = true,
		quiet,
		statuses = [],
		images = [],
		workLoad = 20,
		workLoadText = 'средняя',
		averagePrice = '1000Р',
		mapSrc
	}: CafeCardProps) =>  {
	const {biggerThanTablet} = useWidth();

	const splideOptions = !biggerThanTablet ? {
		type : 'loop',
		gap : '0.5rem',
		arrows : false,
		padding: '0.5rem',
		autoplay: true,
		focus    : 'center',
		perPage  : 1,
		trimSpace: true,
	} : {
		type : 'loop',
		gap : '1.5rem',
		arrows : false,
		padding: '0.5rem',
		autoplay: true,
		perPage  : 3,
	};

	const carousel = React.useMemo(()=><Splide options={splideOptions}>
		{images.map((image, index)=><SplideSlide key={index}>
			<ImageCard imageSrc={image}/>
		</SplideSlide>)}
	</Splide>,[images, splideOptions]);

	const statusesList = React.useMemo(()=>statuses?.map((status:string, index:number)=><Tag key={index}>
		<Typo type={TypographyType.h5} color={TypoColor.black}>{status}</Typo>
	</Tag>),[statuses]);


	if(biggerThanTablet){
		return (
			<div style={{padding:'0 32px'}}>
				<Typo className="cafe-detailed-info__name" block type={TypographyType.h1}>{name}</Typo>
				<div style={{width:'500px', display:'flex'}}>
					{statusesList}
				</div>
				<Separator/>
				<div style={{width:'95vw'}}>{carousel}</div>
				<CafeInfo address={address} time={time}/>
				<Separator invisible/>
				<DetailedFeatures
					wifi={wifi}
					light={light}
					electricity={electricity}
					quiet={quiet}
					workLoad={workLoad}
				/>
				<Separator invisible/>
				{ workLoadText && <Typo type={TypographyType.h4} block>Загруженность:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{workLoadText}</Typo></Typo>}
				{ averagePrice && <Typo type={TypographyType.h4} block>Средний счет:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{averagePrice} &nbsp;руб. </Typo></Typo>}
				<Separator invisible/>
				{mapSrc && <Button
					style={{margin: '0 auto'}}
					className="cafe-detailed-info__button"
					full color={ButtonColor.accentGrey} onClick={()=>window.open(mapSrc, '_blank')}>
					<Typo type={TypographyType.h3} weight={TypoWeight.semiBold}  color={TypoColor.black}>Открыть в картах
					</Typo>
				</Button>
				}
			</div>
		);
	}
	return (
		<div className="cafe-detailed-info">
			<div className="cafe-detailed-info__carousel">
				{carousel}
			</div>
			<Typo className="cafe-detailed-info__name" block type={TypographyType.h1}>{name}</Typo>
			<div className="cafe-detailed-info__statuses">
				{statusesList}
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
			{ averagePrice && <Typo type={TypographyType.h4} block>Средний счет:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{averagePrice} &nbsp;руб. </Typo></Typo>}
			<Separator invisible/>
			{mapSrc && <Button
				className="cafe-detailed-info__button"
				full color={ButtonColor.accentGrey} onClick={()=>window.open(mapSrc, '_blank')}>
				<Typo type={TypographyType.h3} weight={TypoWeight.semiBold}  color={TypoColor.black}>Открыть в картах
				</Typo>
			</Button>
			}
		</div>
	);};

export default DetailedInfo;