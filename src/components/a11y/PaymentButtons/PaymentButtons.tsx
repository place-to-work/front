import React from 'react';
import {useHistory} from 'react-router-dom';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import Http from '@network/Http';
import t, {Phrase} from '@models/Translate';
import {observer} from 'mobx-react-lite';
import ym from 'react-yandex-metrika';
import {setPayOffer} from '@utils/payStorage';
import Message from '@models/Notification/Notification';

type Props = {
	dark?: boolean;
}
function openTab(url) {
	// Create link in memory
	const a = window.document.createElement('a');
	a.target = '_blank';
	a.href = url;

	// Dispatch fake click
	const e = window.document.createEvent('MouseEvents');
	e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
}

const PaymentButtons: React.FC<Props> = ({dark = false}) => {
	const history = useHistory();

	const [url, setUrl] = React.useState<string | null>(null);
	const getUrl = React.useCallback(() => {
		const now = new Date();
		now.setHours(0);
		now.setMinutes(0);
		now.setSeconds(0);
		Http.fetchPost({
			path: '/payments/',
			body: {
				'subscription': 2,
				'subscribe_begin': now.toISOString()
			},
		})
			.then((r) => {
				r.json().then((data) => {
					try {
						if (data?.url) {
							openTab(data.url);
							// setUrl(data?.url);
						} else{
							Message.error('Сервис недоступен. Попробуйте еще раз.');
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
			// disabled={!url}
			// element={'a'}
			// href={url}
			buttonSize={ButtonSize.xl}
			full
			onClick={() => {
				ym('reachGoal', 'Переход в yookassa');
				setPayOffer();
				getUrl();
			}}
			style={{margin: '13px 0'}}
		>
			{t(Phrase.pay)}
		</Button>

		<Button
			// disabled={!url}
			element={'a'}
			href="/free-trial"
			color={dark ? ButtonColor.white : ButtonColor.black}
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
