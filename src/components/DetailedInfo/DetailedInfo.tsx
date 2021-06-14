import * as React from 'react';
import {useEffect, useState} from 'react';
import './DetailedInfo.scss';
import Typo, {TypoColor, TypographyType} from '@components/primitives/Typo';
import Separator from '@components/primitives/Separator';
import Tag from '@components/primitives/Tag';
import CafeInfo from '@components/CafeInfo';
import ImageCard from '@components/primitives/ImageCard';
import DetailedFeatures from '@components/DetailedFeatures';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {useWidth} from '@utils/devices';
import cn from 'classnames';
import PromoCard from '@components/PromoCard';
import {PromoCardColor, PromoCardProps} from '@components/PromoCard/PromoCard';
import Group from '@components/Group';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import {useHistory} from 'react-router-dom';
import QrPopup from '@components/QrPopup';
import Http from '@network/Http';
import User from '@models/User';
import Notification from '@models/Notification';

export type CafeCardProps = {
	imageSrc?: string;
	name?: string;
	address?: string;
	time?: string;

	// Иконки
	wifi?: boolean;
	light?: boolean;
	electricity?: boolean;
	quiet?: string;

	// Подробная информация на странице кафе
	statuses?: string[];
	gallery?: string[];
	images?: string[];
	workLoad?: number;
	workLoadText?: string;
	averagePrice?: string;
	mapSrc?: string;
	promotions?: PromoCardProps[];

};

const DetailedInfo: React.FC<CafeCardProps> = (
	{
		name,
		address,
		time,
		wifi = true,
		light = true,
		electricity = true,
		quiet,
		statuses = [],
		images = [],
		workLoad,
		averagePrice,
		promotions,
	}: CafeCardProps) => {
	const history = useHistory();
	const {isPhone} = useWidth();
	const [link, setLink] = useState<string>();


	const splideOptions = React.useMemo(() => {
		if (isPhone) {
			return {
				type: 'loop',
				gap: '0.25rem',
				fixedHeight: '60vh',
				arrows: false,
				autoplay: true,
				focus: 'center',
				perPage: 1,
				trimSpace: true,
			};
		}

		return {
			type: 'loop',
			gap: '1.5rem',
			arrows: false,
			padding: '0.5rem',
			autoplay: true,
			perPage: 3,
		};


	}, []);

	const carouselRef = React.useRef();
	// @ts-ignore
	const {offsetHeight} = carouselRef?.current?.splideRef?.current || {offsetHeight: null};
	const [height, setHeight] = useState<number | null>();
	const [slideHeight, setSlideHeight] = useState<number | null>();

	useEffect(() => {
		// @ts-ignore
		const {offsetHeight} = carouselRef?.current?.splideRef?.current || null;
		const value = Number(offsetHeight) ? offsetHeight - 10 : null;
		setHeight(value);
		setSlideHeight(value ? window.innerHeight - offsetHeight : null);

	}, [carouselRef]);


	const carousel = React.useMemo(() => <div className="cafe-detailed-info__header">
		<BackIcon size={IconSize.normal} className="cafe-detailed-info__icon-back"
		          onClick={() => history.goBack()}/>
		<Splide options={splideOptions} ref={carouselRef}>
			{images.map((image, index) => <SplideSlide key={index}>
				<ImageCard imageSrc={image} full={isPhone} rounded={false}/>
			</SplideSlide>)}
		</Splide>
	</div>, [images, splideOptions, carouselRef]);

	const statusesList = React.useMemo(() => statuses?.map((status: string, index: number) => <Tag
		color={ButtonColor.white} key={index}>
		<Typo type={TypographyType.h5} color={TypoColor.black}>{status}</Typo>
	</Tag>), [statuses]);


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
	return (<>
		<QrPopup link={link} setLink={setLink}/>
		<div className="cafe-detailed-info">
			<div className={cn('cafe-detailed-info__carousel', isPhone && 'cafe-detailed-info__carousel-absolute')}>
				{carousel}
				<div className={cn('cafe-detailed-info__statuses', statusesList.length <= 1 && 'cafe-detailed-info__statuses_start')}>
					{statusesList}
				</div>
			</div>
			<div className={cn('cafe-info-slide')} style={offsetHeight ? {marginTop: height} : {}}>
				<div className={cn('cafe-info-slide__content')}
					     style={{minHeight: slideHeight}}>
					<Typo className="cafe-detailed-info__name" block
						      type={TypographyType.h1}>{name}</Typo>
					<Separator invisible/>
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
					<Button
						element={'a'}
						href={'/in-place/'}
						buttonSize={ButtonSize.xl}
					        full
					>
						<Typo type={TypographyType.h4}>
							Забронировать
						</Typo>
					</Button>
					<Separator invisible/>
					<Group title="Промо-акции">
						{promotions && promotions.map((promo, i) => <PromoCard
							key={i}
							color={PromoCardColor.light}
							onClick={() => {
								User.getUuid()
									.then((uuid) => {
										console.log({
											sub: User.isSubscribed,
											type:promo.type,
											uuid
										});
										if(promo.type === 1 && !User.isSubscribed){
											console.log('REDIRECT');
											history.push('/in-place');
										} else if ((User.isSubscribed || promo.type === 0 ) && uuid ) {
											console.log('PROMO MODAL');
											console.log(`det inf uuid: ${uuid}`);
											console.log(`det inf promotion: ${promo.id}`);
											setLink(`${Http.serverUrl}/success-discount?uuid=${uuid.subscribe_uuid}&promotion=${promo.id}`);
										} else {
											Notification.error('ошибка получения uuid');
										}
									});
							}}
							{...promo}
						/>)}
					</Group>
				</div>
			</div>
		</div>
	</>
	);
};

export default DetailedInfo;