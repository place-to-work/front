import * as React from 'react';
import './SubscriptionCard.scss';
import {EarIcon, IconLeft, IconSize} from "@components/primitives/Icon";
import Typo, {TypographyType, TypoTextAlign} from "@components/primitives/Typo";

export type CardProps = {

};

const SubscriptionCard: React.FC<CardProps> = ({}: CardProps) => (
    <div className="card">
        <IconLeft size={IconSize.xl}/>
        <Typo type={TypographyType.h1} textAlign={TypoTextAlign.start} block style={{lineHeight:'30px'}}>Месячная подписка</Typo>
        <Typo icon={<EarIcon/>} type={TypographyType.h4}>Безлимитный чай и кофе</Typo>
        <Typo icon={<EarIcon/>} type={TypographyType.h4}>Неограниченный доступ в рабочие пространства</Typo>
        <Typo icon={<EarIcon/>} type={TypographyType.h4}>Бесконечная продуктивность</Typo>
        <Typo icon={<EarIcon/>} type={TypographyType.h4}>И много другого</Typo>

        <Typo type={TypographyType.h1}> 2100Р / месяц</Typo>
        <Typo type={TypographyType.h2}>3900Р / месяц</Typo>
    </div>
);

export default SubscriptionCard;