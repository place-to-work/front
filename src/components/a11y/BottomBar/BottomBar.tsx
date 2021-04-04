import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Collapse from "@components/primitives/Collapse";
import './BottomBar.scss';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from "@components/primitives/Typo";
import Button, {ButtonColor, ButtonSize} from "@components/primitives/Button";
import {useHistory, useParams} from "react-router-dom";
import SubscriptionMain from "@pages/SubscriptionMain/SubscriptionMain";
import cn from "classnames";
import {useLocalStore} from "../../../mobx/hooks/useLocalStore";
import UserStore from "../../../mobx/local/UserStore/UserStore";
import {observer} from "mobx-react-lite";

type Props = {
    // opened: boolean;
    // setOpened:  Dispatch<SetStateAction<boolean>>
}

function isDateBeforeToday(date: Date) {
    const today = new Date()
    console.log(date, today )

    return date >= today;
}


const BottomBar:FC<Props> = ()=>{
    const history = useHistory();

    const store = useLocalStore(() => new UserStore());

    React.useEffect(()=>{
        store.fetchUser();
    },[])

    const [showBlock, setShowBlock] = React.useState(true);

    React.useEffect(()=>{
        console.log('sub', store.user.hasSubscribe, store.user.name)
        if(store.user.hasSubscribe){
            setShowBlock(false);
        }

    },[store.user.hasSubscribe, store.user.name])

    const [full, setFull] = useState(false);



    const handleReBuild = React.useCallback(() => {
        setShowBlock(false);
        console.log('set show block false')
        // setFull(true)
        // setOpened(true)
        setTimeout(()=>{
            setFull(true)
            console.log('set full true')
            setTimeout(()=>{
                setShowBlock(true)
                console.log('set show block true')
            },1000)
        },1000)
    },[])


    return <div className={`container ${showBlock && 'container_opened' }`}>
        <Collapse className="bottom-bar" opened={showBlock}>
            <div className={cn("bottom-bar__content")}>
                <span>{store.user.hasSubscribe}</span>
                <span>{store.user.hasSubscribe}</span>
                {!full ? <>
                        <Typo className="bottom-bar__title" textAlign={TypoTextAlign.center} type={TypographyType.h1}>Чтобы
                            увидеть все заведения&nbsp;&mdash; оформите подписку</Typo>
                        <Typo className="bottom-bar__subtitle" textAlign={TypoTextAlign.center} type={TypographyType.h3}
                              weight={TypoWeight.regular}>Получайте бесплатный чай, скидки в&nbsp;кафе, неограниченный
                            доступ в&nbsp;рабочие пространства и&nbsp;многое другое</Typo>
                        <Button buttonSize={ButtonSize.xl} className="bottom-bar__button" full color={ButtonColor.accent}
                                onClick={handleReBuild}>Оформить подписку</Button>
                    </> :
                    <SubscriptionMain/>
                }
            </div>

    </Collapse>
    </div>
}
export default observer(BottomBar);