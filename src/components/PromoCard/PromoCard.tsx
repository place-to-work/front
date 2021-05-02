import * as React from 'react';
import Typo, {TypographyType, TypoWeight} from '@components/primitives/Typo';
import './PromoCard.scss';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';
import Icon, {IconSize, IconType} from '@components/primitives/Icon';

export enum PromoCardColor {
    dark = 'dark',
    light = 'light'
}
export type PromoCardProps = {
 color?:PromoCardColor;
 img?: string;
 title?: string;
 subtitle?:string
 className?: string;
 onClick?: ()=>void;
 icon?: IconType;
 onIconClick?:()=>void
};

const PromoCard: React.FC<PromoCardProps> = ({ color = PromoCardColor.dark, icon = IconType.qrIcon, img, title, subtitle, className, onIconClick, onClick}: PromoCardProps) => (

	<div className={cn('promo-card',`promo-card_${color}`,className)} onClick={onClick}>
		{img && <img src={img} className='promo-card__image' alt=''/>}
		<div className='promo-card__content'>
			<Typo className='promo-card__title' type={TypographyType.h3} weight={TypoWeight.light}>{title}</Typo>
			<div className='promo-card__bottom'>
				<Typo className='promo-card__subtitle' type={TypographyType.h2} weight={TypoWeight.light}>{subtitle}</Typo>
				<Icon type={icon} className='promo-card__icon' size={IconSize.m} onClick={onIconClick}/>
			</div>

		</div>
	</div>
);

export default PromoCard;