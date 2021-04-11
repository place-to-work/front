
export const PAY_OFFER = 'PAY_OFFER';
export enum PAY_OFFER_STATE {
    INIT = 'INIT',
    WAITING = 'WAITING'


}
export const setPayOffer = (): void => localStorage.setItem(PAY_OFFER,PAY_OFFER_STATE.WAITING);
export const resetPayOffer = (): void => localStorage.setItem(PAY_OFFER,PAY_OFFER_STATE.INIT);

export const isWaitingForPay = (): boolean => localStorage.getItem(PAY_OFFER) === PAY_OFFER_STATE.WAITING;