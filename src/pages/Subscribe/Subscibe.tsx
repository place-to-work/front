import React from 'react';
import {observer} from 'mobx-react-lite';
import Header from '@components/a11y/Header';
import {HeaderType} from "@components/a11y/Header/Header";
import {
    ButtonApplePay,
    ButtonBank,
    ButtonGooglePay,
    ButtonSber,
    ButtonYouMoney
} from "@components/primitives/ButtonPay";
import './Subscribe.scss';
import Typo, {TypographyType, TypoTextAlign} from "@components/primitives/Typo";

const SubscribePage: React.FC = () => {

    return (<>
            <Header withBack/>
            <div className="subscribe-page">
                <Typo type={TypographyType.h2} textAlign={TypoTextAlign.center} className="subscribe-page__title">Оплата подписки</Typo>
                <div className="subscribe-page__buttons">
                <ButtonApplePay full className="subscribe-page__button"/>
                <ButtonGooglePay full className="subscribe-page__button"/>
                <ButtonBank full className="subscribe-page__button"/>
                <ButtonSber full className="subscribe-page__button"/>
                <ButtonYouMoney full className="subscribe-page__button"/>
                </div>
            </div>
        </>
    );
};

export default observer(SubscribePage);