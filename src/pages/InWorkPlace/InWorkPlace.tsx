import './InWorkPlace.scss';
import React from 'react';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Button, {ButtonColor} from '@components/primitives/Button';
import Http from '@network/Http';
import BottomBar from '@components/a11y/BottomBar';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import QrCard from '@components/QrCard';
import {useLocalStore} from 'mobx-react-lite';
import UserStore from '../../mobx/local/UserStore/UserStore';
import t, {Phrase} from '@models/Translate';

interface InWorkPlaceProps {
	qrValue: string;
}


const InWorkPlace: React.FC<InWorkPlaceProps> = () => {
	const history = useHistory();
	const [uuid, setUuid] = React.useState('qwer');

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
	const store = useLocalStore(() => new UserStore());

	console.log(JSON.stringify(store, null, 4));
	const date = new Date(store.user.subscribeDate);
	console.log(`date = ${date}`);
	const day = date.getDate();
	console.log(`day = ${day}`);
	const month = date.getMonth();

	const tmpMobileWidth = {maxWidth: 360};
	return <BasePage
		headerProps={{
			left: () => <BackIcon size={IconSize.m} onClick={() => history.push('/places')}/>,
		}}
		mainProps={{
			style: {padding: 16},
			body: () => <>
				<QrCard value={uuid}/>

				<Typo
					block
					type={TypographyType.h1}
					textAlign={TypoTextAlign.center}
					style={{lineHeight: 1, margin: '16px 0',...tmpMobileWidth}}
				>
					{uuid?.length ? t(Phrase.subscriptionActivated) : t(Phrase.subscriptionNotActivated)}
				</Typo>
				{Boolean(uuid?.length) && <Typo
					block
					type={TypographyType.h4}
					textAlign={TypoTextAlign.center}
					style={{ ...tmpMobileWidth}}
				>
					{t(Phrase.showQrSuggestion)}
				</Typo>
				}

				{Boolean(uuid?.length) &&
				<div style={{display: 'flex', justifyContent: 'center', margin: '16px 0', ...tmpMobileWidth}}>
					<Typo type={TypographyType.h4}>{t(Phrase.expirationDate)}<Typo
						type={TypographyType.h4}
						weight={TypoWeight.bold}>{t(Phrase.dayNMonth, {day, month})}</Typo></Typo>
				</div>
				}

				<div style={{display: 'flex', justifyContent: 'center'}}>
					<Button
						full
						onClick={() => history.push('/places')}
						color={ButtonColor.accentGrey}
					>
						{t(Phrase.gotoAllWorkPlaces)}
					</Button>
				</div>
				{!uuid?.length && <BottomBar/>}
			</>,
		}}
	/>;
};

export default InWorkPlace;
