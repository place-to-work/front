import './InWorkPlace.scss';
import React from 'react';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Button, {ButtonColor} from '@components/primitives/Button';
import Http from '@network/Http';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import QrCard from '@components/QrCard';
import t, {Phrase} from '@models/Translate';
import User from '@models/User';
import {observer} from 'mobx-react-lite';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';

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
			style: {padding: 12},
			body: () => <div>
				{uuid?.length ? <QrCard value={uuid}/> : <SubscriptionCard/>}

				<Typo
					block
					type={TypographyType.h1}
					textAlign={TypoTextAlign.center}
					className="in-work-place__title"
					style={{lineHeight: 1,...tmpMobileWidth}}
				>
					{uuid?.length ? t(Phrase.subscriptionActivated) : t(Phrase.subscriptionNotActivated)}
				</Typo>
				{Boolean(uuid?.length) && <Typo
					block
					type={TypographyType.h4}
					textAlign={TypoTextAlign.center}
					style={{ margin:'0 auto',...tmpMobileWidth}}
				>
					{t(Phrase.showQrSuggestion)}
				</Typo>
				}

				{Boolean(uuid?.length) &&
				<div className="in-work-place__estimated-date" style={{ ...tmpMobileWidth}}>
					<Typo type={TypographyType.h4}>{t(Phrase.expirationDate)}<Typo
						type={TypographyType.h4}
						weight={TypoWeight.bold}>{t(Phrase.dayNMonth, {day, month})}</Typo></Typo>
				</div>
				}

				<div className="in-work-place__button">
					<Button
						full
						onClick={() => history.push('/places')}
						color={ButtonColor.accentGrey}
					>
						{t(Phrase.gotoAllWorkPlaces)}
					</Button>
				</div>
			</div>
		}}
	/>;
};

export default observer(InWorkPlace);
