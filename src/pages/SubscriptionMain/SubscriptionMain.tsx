import React from 'react';
import {observer} from 'mobx-react-lite';
import './SubscriptionMain.scss';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from "@components/primitives/Typo";
import {FormikInput} from "@components/primitives/FormikInput/FormikInput";
import {Form, Formik, FormikProps} from "formik";
import Button, {ButtonSize} from "@components/primitives/Button";
import SubscriptionCard from "@components/SubscribtionCard/SubscriptionCard";
import Http from "@network/Http/Http";
import {useHistory, useParams} from "react-router-dom";

interface PromoValues {
    promo: '';
}

const initialValues: PromoValues = {
    promo: ''
};

const SubscriptionMainPage: React.FC = () => {

    const history = useHistory();


    const [paymentLoad, setPaymentLoad] = React.useState(localStorage.getItem('payment') || false)
    const onSubmit = (values: PromoValues) => {
        Http.fetchPost({
            path: '/payments/',
            body: null,
        })
            .then((r) => {
                r.json().then((data)=>{
                    try{
                        if(data?.url){
                            window.open(data.url, '_blank')
                        }

                    }
                    catch (e){

                    }
                })
            })
            .catch(console.log);
        console.log(`sum: ${JSON.stringify(values)}`);
    };



    return (<>
            <div className="subscription-page">
                <Typo>
                <Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center} className="subscription-page_title">Оформление</Typo>
                <Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center} className="subscription-page_title">подписки</Typo>
                </Typo>

                <SubscriptionCard />

                <div className="subscription-page__buttons">
                    <Formik<PromoValues>
                        initialValues={initialValues}
                        render={(formikProps: FormikProps<PromoValues>) => <>
                            <Form>
                                {/*<FormikInput*/}
                                {/*    id="promo"*/}
                                {/*    formikProps={formikProps}*/}
                                {/*    placeholder="Промокод"*/}
                                {/*/>*/}

                                <Button
                                    buttonSize={ButtonSize.xl}
                                    full
                                    style={{margin: '13px 0'}}>Оплатить
                                </Button>
                                {/*<Typo textAlign={TypoTextAlign.center} style={{width:'100%'}} type={TypographyType.h4} color={TypoColor.darkGrey}>Продолжить без подписки</Typo>*/}

                            </Form>
                        </>
                        } onSubmit={onSubmit}/>
            </div>
        </div>
        </>
    );
};

export default observer(SubscriptionMainPage);