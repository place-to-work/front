import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Collapse from "@components/primitives/Collapse";
import './BottomBar.scss';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from "@components/primitives/Typo";
import Button, {ButtonColor, ButtonSize} from "@components/primitives/Button";
import {useHistory, useParams} from "react-router-dom";
import SubscriptionMain from "@pages/SubscriptionMain/SubscriptionMain";
import cn from "classnames";

type Props = {
    opened: boolean;
    setOpened:  Dispatch<SetStateAction<boolean>>
}
const BottomBar:FC<Props> = ({opened = false, setOpened})=>{
    const history = useHistory();
    const [full, setFull] = useState(false);

    const [paymentLoad, setPaymentLoad] = React.useState(false);
    const hasLocal = localStorage.getItem('payment');


    if(hasLocal){
        setPaymentLoad(true)
    }




    const handleReBuild = React.useCallback(() => {
        setOpened(false);
        // setFull(true)
        // setOpened(true)
        setTimeout(()=>{
            setFull(true)
            setTimeout(()=>{
                setOpened(true)
            },1000)
        },1000)
    },[])


    return <div className={`container ${opened && 'container_opened' }`}>
        <Collapse className="bottom-bar" opened={opened}>
            <div className={cn("bottom-bar__content")}>
                {!full ? <>
                        <Typo className="bottom-bar__title" textAlign={TypoTextAlign.center} type={TypographyType.h1}>Чтобы
                            увидеть все заведения&nbsp;&mdash; оформите подписку</Typo>
                        <Typo className="bottom-bar__subtitle" textAlign={TypoTextAlign.center} type={TypographyType.h3}
                              weight={TypoWeight.regular}>Получайте бесплатный чай, скидки в&nbsp;кафе, неограниченный
                            доступ в&nbsp;рабочие пространства и&nbsp;многое другое</Typo>
                        <Button disabled={paymentLoad} buttonSize={ButtonSize.xl} className="bottom-bar__button" full color={ButtonColor.accent}
                                onClick={handleReBuild}>Оформить подписку</Button>
                    </> :
                    <SubscriptionMain/>
                }
            </div>

    </Collapse>
    </div>
}
export default BottomBar;