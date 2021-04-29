import './InWorkPlace.scss';
import React from 'react';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypoColor, TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Http from '@network/Http';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import QrCard from '@components/QrCard';
import t, {Phrase} from '@models/Translate';
import User from '@models/User';
import {observer} from 'mobx-react-lite';
import PaymentButtons from '@components/a11y/PaymentButtons';

interface InWorkPlaceProps {
	qrValue: string;
}


const InWorkPlace: React.FC<InWorkPlaceProps> = () => {
	const history = useHistory();
	const [uuid, setUuid] = React.useState('');

	React.useEffect(() => {
		Http.fetchPost({path: '/users/uuid/', body: undefined})
			.then((response) => {
				if (response.ok) {
					response.json()
						.then((body) => {
							const uuid = body.subscribe_uuid;
							setUuid(uuid);
						});
				}
			});
	}, []);


	const date = new Date(User.subscribedUntil);
	console.log(`user = \n${JSON.stringify(User, null, 4)}`);
	const day = date.getDate();
	const month = date.getMonth();

	const tmpMobileWidth = {maxWidth: 360};
	return <BasePage
		headerProps={{
			left: () => <BackIcon size={IconSize.m} onClick={() => history.push('/places')}/>,
		}}
		mainProps={{
			body: () => <div>
				{Boolean(uuid?.length) && <>
					<QrCard value={`https://place-to-work.${ROOT_DOMAIN}/staff/${uuid}`}/>
					<Typo
						block
						type={TypographyType.h1}
						textAlign={TypoTextAlign.center}
						className="in-work-place__title"
						style={{lineHeight: 1, ...tmpMobileWidth}}
					>
						{t(Phrase.subscriptionActivated)}
					</Typo>
					<Typo
						block
						type={TypographyType.h4}
						textAlign={TypoTextAlign.center}
						style={{margin: '0 auto', ...tmpMobileWidth}}
					>
						{t(Phrase.showQrSuggestion)}
					</Typo>

					<div className="in-work-place__estimated-date" style={{...tmpMobileWidth}}>
						<Typo type={TypographyType.h4}>{t(Phrase.expirationDate)}<Typo
							type={TypographyType.h4}
							weight={TypoWeight.bold}>{t(Phrase.dayNMonth, {
								day,
								month,
							})}</Typo></Typo>
					</div>
				</>
				}
				{!uuid.length && <>
					<div className="qr-not-available-container">
						<QrCard disabled value={`https://place-to-work.${ROOT_DOMAIN}/auth`}/>
						<Typo className="qr-not-available-container__text" color={TypoColor.white} weight={TypoWeight.regular}>QR-код не доступен</Typo>
					</div>
					<Typo type={TypographyType.h2}>
						Вы еще не оформили подписку
					</Typo>
					<Typo type={TypographyType.h4}>
						Оформив подписку, вы получите неограниченный доступ в кафе, бесплатные  кофе и чай, возможность пользоваться переговорками,
						и многое другое.
					</Typo>
					<PaymentButtons/>
				</>}
				<Typo
					style={{margin:'8px auto', width:'100%'}}
					textAlign={TypoTextAlign.center}
					type={TypographyType.h4}
					color={TypoColor.darkGrey}
					onClick={()=>{
						Http.fetchPost({path:'/users/logout/', body:undefined}).then(()=>history.push('/auth'));
					}}
				>Выйти из системы</Typo>
			</div>,
		}}
	/>;
};

export default observer(InWorkPlace);
