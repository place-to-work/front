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

function openTab(url) {
    // Create link in memory
    console.log('fale clicl')
    let a = window.document.createElement("a");
    a.target = '_blank';
    a.href = url;

    // Dispatch fake click
    let e = window.document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
};

const SubscriptionMainPage: React.FC = () => {

    const history = useHistory();
    const [url, setUrl] = React.useState<string|null>(null)
    const [paymentLoad, setPaymentLoad] = React.useState(localStorage.getItem('payment') || false)
    React.useEffect(()=> {
        Http.fetchPost({
            path: '/payments/',
            body: null,
        })
            .then((r) => {
                r.json().then((data)=>{
                    try{
                        if(data?.url){
                            setUrl(data?.url);
                            // window.open(data.url, '_blank')
                        } else{
                            // window.open('http://google.com', '_blank')
                        }

                    }
                    catch (e){

                    }
                })
            })
            .catch(console.log);
    },[])




    return (<>
            <div className="subscription-page">
                <Typo className="subscription-page__title">
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
                                    disabled={!url}
                                    element={"a"}
                                    href={url}
                                    buttonSize={ButtonSize.xl}
                                    full
                                    onClick={()=>console.log('click')}
                                    style={{margin: '13px 0'}}>Оплатить
                                </Button>
                                {/*<Typo textAlign={TypoTextAlign.center} style={{width:'100%'}} type={TypographyType.h4} color={TypoColor.darkGrey}>Продолжить без подписки</Typo>*/}

                            </Form>
                        </>
                        } onSubmit={()=>{}}/>
            </div>
        </div>
        </>
    );
};

export default observer(SubscriptionMainPage);