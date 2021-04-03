
import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from "@pages/BasePage";
import Typo, {TypographyType} from "@components/primitives/Typo";
import Button, {ButtonColor} from "@components/primitives/Button";
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from "@network/Http/Http";


const StaffPage: React.FC = () => {
    const history = useHistory();
    const baseSize = 360;

    const { id } = useParams<{id}>();
    if(!id){
        return null
    }

    const onTea = () => {
        Http.fetchPost({
            path: '/users/login/',
            body: JSON.stringify({
                user: id,
                place: 1,
                product: 1

            }),
        })
            .then((response) => {
                if (response.ok) {
                    history.push('/places');
                } else {
                    response.json().then(console.log);
                }
            })
            .catch(console.log);

    };

    const onCoffee = () => {
        Http.fetchPost({
            path: '/products/choice',
            body: JSON.stringify({
                user: id,
                place: 1,
                product: 2

            }),
        })
            .then((response) => {
                if (response.ok) {
                    history.push('/places');
                } else {
                    response.json().then(console.log);
                }
            })
            .catch(console.log);

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