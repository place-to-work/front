import React from "react";
import {ButtonColor, ButtonProps} from "@components/primitives/Button";
import ButtonPay from "@components/primitives/ButtonPay/ButtonPay";
import {
    ApplePayIcon,
    ArrowDirIcon,
    BankIcon, GooglePayIcon,
    IconColor,
    IconSize,
    SberIcon,
    YouMoneyIcon
} from "@components/primitives/Icon";
import {ArrowDir} from "@components/primitives/Icon/components/ArrowDirIcon";

const ButtonApplePay: React.FC<ButtonProps> = ({...props}) => {
    return <ButtonPay {...props} iconPrimary={<ApplePayIcon size={IconSize.xl}/>} color={ButtonColor.black}/>
}

const ButtonGooglePay: React.FC<ButtonProps> = ({...props}) => {
    return <ButtonPay {...props} iconPrimary={<GooglePayIcon size={IconSize.normal}/>} color={ButtonColor.black}/>
}

const ButtonBank: React.FC<ButtonProps> = ({...props}) => {
    return <ButtonPay
        {...props}
        iconLeft={<BankIcon size={IconSize.normal}/>}
        iconRight={<ArrowDirIcon size={IconSize.s} dir={ArrowDir.right} color={IconColor.accent} />}
        title="Банковская карта"
        subtitle="Mastercard, Maestro, Visa, МИР"
        color={ButtonColor.grey}/>
}


const ButtonSber: React.FC<ButtonProps> = ({...props}) => {
    return <ButtonPay
        {...props}
        iconLeft={<SberIcon size={IconSize.normal}/>}
        iconRight={<ArrowDirIcon size={IconSize.s} dir={ArrowDir.right} color={IconColor.accent} />}
        title="Сбербанк"
        subtitle="Смс или интернет-банк"
        color={ButtonColor.grey}/>
}

const ButtonYouMoney: React.FC<ButtonProps> = ({...props}) => {
    return <ButtonPay
        {...props}
        iconLeft={<YouMoneyIcon size={IconSize.normal}/>}
        iconRight={<ArrowDirIcon size={IconSize.s} dir={ArrowDir.right} color={IconColor.accent} />}
        title="ЮMoney"
        subtitle="Кошелек и привязанные карты"
        color={ButtonColor.grey}/>
}



export {
    ButtonApplePay,
    ButtonGooglePay,
    ButtonBank,
    ButtonSber,
    ButtonYouMoney,
}