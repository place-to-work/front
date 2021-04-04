import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from "@pages/BasePage";
import Typo, {TypographyType} from "@components/primitives/Typo";
import Button, {ButtonColor} from "@components/primitives/Button";
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from "@network/Http/Http";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";
import {observer} from "mobx-react-lite";
import {UserCategory} from "../../mobx/local/UserStore/types";


const StaffPage: React.FC = () => {
    const history = useHistory();
    const baseSize = 360;

    const { id } = useParams<{id}>();

    const store = useLocalStore(() => new UserStore());

    React.useEffect(()=>{
        store.fetchUser();
    },[])

    React.useEffect(()=>{
        if(store.user.id !== -1){
            if(store.user.type === UserCategory.client){
                history.push('/places');
            }
        }
    },[store])

    if(!id){
        return null
    }


    const onTea = React.useCallback(async () => {
        const resp = await Http.fetchPost({
            path: '/products/choice/',
            body: JSON.stringify({
                user: id,
                place: store.user.place,
                product: 1

            }),
        })
        if(resp.ok){
            window.close();
        } else {
            // history.push('/auth')
        }

    },[store.user.place, id])

    const onCoffee = React.useCallback(async () => {
        const resp = await Http.fetchPost({
            path: '/products/choice/',
            body: JSON.stringify({
                user: id,
                place: store.user.place,
                product: 2

            }),
        })
        if(resp.ok){
            window.close();
        } else {
            // history.push('/auth')
        }

    },[store.user.place, id])


    return <BasePage
        headerProps={{middle: () => <CenterLogo/>}}
        mainProps={{
            body: () => <>
                <Typo style={{marginBottom:'72px'}} type={TypographyType.h1} block>Что взял клиент?</Typo>

                <Button disabled={store.user.type === UserCategory.client } onClick={onTea} style={{marginBottom:'36px'}} full color={ButtonColor.accentGrey}>Чай</Button>
                <Button disabled={store.user.type === UserCategory.client} onClick={onCoffee} full color={ButtonColor.accentGrey}>Кофе</Button>
                </>
        }
        }
    />

};

export default observer(StaffPage);