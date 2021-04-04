
import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from "@pages/BasePage";
import Typo, {TypographyType} from "@components/primitives/Typo";
import Button, {ButtonColor} from "@components/primitives/Button";
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from "@network/Http/Http";
import {UserContext} from "@models/UserProvider";


const StaffPage: React.FC = () => {
    const history = useHistory();
    const baseSize = 360;

    const { id } = useParams<{id}>();

    const context = React.useContext(UserContext);

    React.useEffect(()=>{
        console.log('effect', {context})
    },[context])
    console.log({context})

    if(!id){
        return null
    }


    const onTea = async () => {
        const resp = await Http.fetchPost({
            path: '/products/choice/',
            body: JSON.stringify({
                user: id,
                place: 1,
                product: 1

            }),
        })
        if(resp.ok){
            window.close();
        } else {
            history.push('/auth')
        }

    };

    const onCoffee = async () => {
        const resp = await Http.fetchPost({
            path: '/products/choice/',
            body: JSON.stringify({
                user: id,
                place: 1,
                product: 2

            }),
        })
        if(resp.ok){
            window.close();
        } else {
            history.push('/auth')
        }

    };

    return <BasePage
        headerProps={{middle: () => <CenterLogo/>}}
        mainProps={{
            body: () => <>
                <Typo style={{marginBottom:'72px'}} type={TypographyType.h1} block>Что взял клиент?</Typo>

                <Button onClick={onTea} style={{marginBottom:'36px'}} full color={ButtonColor.accentGrey}>Чай</Button>
                <Button onClick={onCoffee} full color={ButtonColor.accentGrey}>Кофе</Button>
                </>
        }
        }
    />

};

export default StaffPage;