import * as React from 'react';
import './ButtonPay.scss';
import Button, {ButtonProps} from "@components/primitives/Button";
import Typo, {TypoColor, TypographyType} from "@components/primitives/Typo";
import cn from "classnames";

type BankProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}
type PrimaryProps = {
    iconPrimary?: React.ReactNode | null;
}

type Props = BankProps & PrimaryProps & ButtonProps;

const ButtonPay: React.FC<Props> = ({iconLeft, iconRight, title, subtitle, iconPrimary = null, ...buttonProps }:Props) =>{
   if(iconPrimary){
       return <Button className={cn('button-pay', 'button-pay_primary')} {...buttonProps}>{iconPrimary}</Button>
   }

   return <Button className="button-pay" withWrapper={false} {...buttonProps}>
       <div className="button-wrapper">
       {iconLeft && <div className="button-pay__left-icon">{iconLeft}</div>}
       <div className="button-pay__content">
           {title && <Typo block type={TypographyType.h3} >{title}</Typo>}
           { subtitle && <Typo block type={TypographyType.h6} color={TypoColor.darkGrey} >{subtitle}</Typo> }
       </div>
       {iconRight && <div className="button-pay__right-icon">{iconRight}</div>}
       </div>
   </Button>
}
export default ButtonPay;