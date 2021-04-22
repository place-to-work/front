import React from 'react';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import Http from '@network/Http';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import QrCard from '@components/QrCard';
import t, {Phrase} from '@models/Translate';
import User from '@models/User';
import {observer} from 'mobx-react-lite';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';
import ym from 'react-yandex-metrika';
import {setPayOffer} from '@utils/payStorage';

const PaymentButtons: React.FC = () => {
	const history = useHistory();

	const [url, setUrl] = React.useState<string | null>(null);
	React.useEffect(() => {
		Http.fetchPost({
			path: '/payments/',
			body: null,
		})
			.then((r) => {
				r.json().then((data) => {
					try {
						if (data?.url) {
							setUrl(data?.url);
							// window.open(data.url, '_blank')
						} else {
							// window.open('http://google.com', '_blank')
						}

					} catch (e) {
						console.log(`subscription main error: ${e}`);
					}
				});
			})
			.catch(console.log);
	}, []);


	return <div>
		<Button
			disabled={!url}
			element={'a'}
			href={url}
			buttonSize={ButtonSize.xl}
			full
			onClick={() => {
				ym('reachGoal', 'Переход в yookassa');
				setPayOffer();
			}}
			style={{margin: '13px 0'}}
		>
			{t(Phrase.pay)}
		</Button>

		<Button
			// disabled={!url}
			element={'a'}
			href="/free-trial"
			color={ButtonColor.black}
			buttonSize={ButtonSize.xl}
			full
			onClick={() => {

			}}
			style={{margin: '13px 0'}}
		>
            Пробный день за 350 руб
		</Button>

		{/*<div className="in-work-place__button" style={{marginTop: 10}}>*/}
		{/*	<Button*/}
		{/*		full*/}
		{/*		onClick={() => history.push('/places')}*/}
		{/*		color={ButtonColor.accentGrey}*/}
		{/*	>*/}
		{/*		{t(Phrase.gotoAllWorkPlaces)}*/}
		{/*	</Button>*/}
		{/*</div>*/}
	</div>;
};

export default observer(PaymentButtons);
