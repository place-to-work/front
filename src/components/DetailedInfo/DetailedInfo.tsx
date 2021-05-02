import * as React from 'react';
import {useEffect, useState} from 'react';
import './DetailedInfo.scss';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Separator from '@components/primitives/Separator';
import Tag from '@components/primitives/Tag';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/primitives/ImageCard';
import DetailedFeatures from '@components/DetailedFeatures';
import Button, {ButtonColor} from '@components/primitives/Button';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {useWidth} from '@utils/devices';
import cn from 'classnames';
import PromoCard from '@components/PromoCard';
import {PromoCardColor} from '@components/PromoCard/PromoCard';
import Group from '@components/Group';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import {useHistory} from 'react-router-dom';

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
	const history = useHistory();
	const {isPhone, isSmallPhone ,biggerThanTablet} = useWidth();


	const splideOptions = React.useMemo(()=>{
		if(isPhone){
			return {
				type : 'loop',
				gap : '0.25rem',
				fixedHeight:'60vh',
				arrows : false,
				autoplay: true,
				focus    : 'center',
				perPage  : 1,
				trimSpace: true,
			};
		}

		return {
			type : 'loop',
			gap : '1.5rem',
			arrows : false,
			padding: '0.5rem',
			autoplay: true,
			perPage  : 3,
		};



	},[]);

	const carouselRef = React.useRef();
	// @ts-ignore
	const { offsetHeight } = carouselRef?.current?.splideRef?.current || { offsetHeight: null};
	const [height, setHeight] = useState<number | null>();
	console.log(offsetHeight);
	useEffect(()=>{
		// @ts-ignore
		const { offsetHeight } = carouselRef?.current?.splideRef?.current || null;
		const value = Number(offsetHeight) ? offsetHeight - 10  : null;
		setHeight(value);
	},[carouselRef]);


	const carousel = React.useMemo(()=> <div className="cafe-detailed-info__header">
		<BackIcon size={IconSize.normal} className="cafe-detailed-info__icon-back" onClick={() => history.push('/places')}/>
		<Splide options={splideOptions} ref={carouselRef}>
			{images.map((image, index)=><SplideSlide key={index}>
				<ImageCard imageSrc={image} full={isPhone} rounded={false}/>
			</SplideSlide>)}
		</Splide>
	</div>,[images, splideOptions,carouselRef]);

	const statusesList = React.useMemo(()=>statuses?.map((status:string, index:number)=><Tag color={ButtonColor.white} key={index}>
		<Typo type={TypographyType.h5} color={TypoColor.black}>{status}</Typo>
	</Tag>),[statuses]);


	// if(biggerThanTablet){
	// 	return (
	// 		<div style={{padding:'0 32px'}}>
	// 			<Typo className="cafe-detailed-info__name" block type={TypographyType.h1}>{name}</Typo>
	// 			<div style={{width:'500px', display:'flex'}}>
	// 				{statusesList}
	// 			</div>
	// 			<Separator/>
	// 			<div style={{width:'95vw'}}>{carousel}</div>
	// 			<CafeInfo address={address} time={time}/>
	// 			<Separator invisible/>
	// 			<DetailedFeatures
	// 				wifi={wifi}
	// 				light={light}
	// 				electricity={electricity}
	// 				quiet={quiet}
	// 				workLoad={workLoad}
	// 			/>
	// 			<Separator invisible/>
	// 			{ workLoadText && <Typo type={TypographyType.h4} block>Загруженность:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{workLoadText}</Typo></Typo>}
	// 			{ averagePrice && <Typo type={TypographyType.h4} block>Средний счет:{' '}<Typo weight={TypoWeight.semiBold} type={TypographyType.h4}>{averagePrice} &nbsp;руб. </Typo></Typo>}
	// 			<Separator invisible/>
	// 			{mapSrc && <Button
	// 				style={{margin: '0 auto'}}
	// 				className="cafe-detailed-info__button"
	// 				full color={ButtonColor.accentGrey} onClick={()=>window.open(mapSrc, '_blank')}>
	// 				<Typo type={TypographyType.h3} weight={TypoWeight.semiBold}  color={TypoColor.black}>Открыть в картах
	// 				</Typo>
	// 			</Button>
	// 			}
	// 		</div>
	// 	);
	// }
	return (
		<div className="cafe-detailed-info">
			<div className={cn('cafe-detailed-info__carousel', isPhone && 'cafe-detailed-info__carousel-absolute')}>
				{carousel}
				<div className="cafe-detailed-info__statuses">
					{statusesList}
				</div>
			</div>
			<div className={cn(isPhone && 'cafe-info-slide')} style={offsetHeight ? {marginTop:height} : {}}>
				<div className={cn(isPhone && 'cafe-info-slide__content')}>
					<Typo className="cafe-detailed-info__name" block type={TypographyType.h1}>{name}</Typo>
					<Separator black/>
					<CafeInfo address={address} time={time}/>
					<Separator black/>
					<DetailedFeatures
						wifi={wifi}
						light={light}
						electricity={electricity}
						quiet={quiet}
						workLoad={workLoad}
						averagePrice={averagePrice}
					/>
					<Separator black/>
					<Separator invisible/>
					<Group title="Промо-акции">
						<PromoCard color={PromoCardColor.dark} title='Скидка на салат' subtitle='8%'/>
						<PromoCard color={PromoCardColor.dark} title='Скидка на кофе' subtitle='5%' img='https://www.restoclub.ru/uploads/place_thumbnail_big/8/0/c/e/80ce6962d6e749c10acf26928011c48f.jpg'/>
						<PromoCard color={PromoCardColor.light} title='Скидка на котлетку' subtitle='15%'/>
						<PromoCard color={PromoCardColor.light} title='Скидка на чай' subtitle='20%' img='https://www.restoclub.ru/uploads/place_thumbnail_big/8/0/c/e/80ce6962d6e749c10acf26928011c48f.jpg'/>
					</Group>

				</div>
			</div>
		</div>
	);};

export default DetailedInfo;