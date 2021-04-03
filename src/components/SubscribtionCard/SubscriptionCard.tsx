import * as React from 'react';
import './SubscriptionCard.scss';
import {CheckIcon, CupIcon, IconLeft, IconSize, LaptopIcon, WorkIcon} from "@components/primitives/Icon";
import Typo, {TypographyType, TypoTextAlign} from "@components/primitives/Typo";

export type CardProps = {

};

const SubscriptionCard: React.FC<CardProps> = ({}: CardProps) => (
    <div className="card">
        <IconLeft size={IconSize.xl}/>
        <Typo type={TypographyType.h1} textAlign={TypoTextAlign.start} block style={{lineHeight:'30px'}}>Месячная подписка</Typo>
         <div className="card__features">
                 <Typo icon={<CupIcon className="card__icon" size={IconSize.xs}/>} type={TypographyType.h4}>Безлимитный чай и кофе</Typo>
                 <Typo icon={<WorkIcon className="card__icon" size={IconSize.xs}/>} type={TypographyType.h4}>Неограниченный доступ в рабочие пространства</Typo>
                 <Typo icon={<LaptopIcon className="card__icon" size={IconSize.xs}/>} type={TypographyType.h4}>Бесконечная продуктивность</Typo>
                 <Typo icon={<CheckIcon className="card__icon" size={IconSize.xs}/>} type={TypographyType.h4}>И много другого</Typo>

         </div>
        <Typo block className="card__price" type={TypographyType.h1}> 2100Р / месяц</Typo>
        <Typo block className="card__price-old"type={TypographyType.h2}>3900Р / месяц</Typo>
    </div>
);

export default SubscriptionCard;