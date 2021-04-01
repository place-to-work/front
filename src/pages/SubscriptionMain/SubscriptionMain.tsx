import React from 'react';
import {observer} from 'mobx-react-lite';
import Header from '@components/a11y/Header';
import './SubscriptionMain.scss';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from "@components/primitives/Typo";
import {FormikInput} from "@components/primitives/FormikInput/FormikInput";
import {Form, Formik, FormikProps} from "formik";
import Button, {ButtonSize} from "@components/primitives/Button";
import Footer from "@components/a11y/Footer";
import SubscriptionCard from "@components/SubscribtionCard/SubscriptionCard";

interface PromoValues {
    promo: '';
}

const initialValues: PromoValues = {
    promo: ''
};

const SubscriptionMainPage: React.FC = () => {

    return (<>
            <Header withBack/>
            <div className="subscription-page">
                <Typo>
                <Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center} className="subscription-page_title">Оформление</Typo>
                <Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center} className="subscription-page_title">подписки</Typo>
                </Typo>

                <SubscriptionCard/>

                <div className="subscription-page__buttons">
                    <Formik<PromoValues>
                        initialValues={initialValues}
                        render={(formikProps: FormikProps<PromoValues>) => <>
                            <Form>
                                <FormikInput
                                    id="promo"
                                    formikProps={formikProps}
                                    placeholder="Промокод"
                                />

                                <Button
                                    full
                                    buttonSize={ButtonSize.classic}
                                    style={{margin: '13px 0'}}>Оплатить
                                </Button>
                                <Typo textAlign={TypoTextAlign.center} style={{width:'100%'}} type={TypographyType.h4} color={TypoColor.darkGrey}>Продолжить без подписки</Typo>
                            </Form>
                        </>

                        } onSubmit={()=>console.log('aaa')}/>
            </div>
        </div>
        </>
    );
};

export default observer(SubscriptionMainPage);