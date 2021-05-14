import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import Button, {ButtonColor} from '@components/primitives/Button';
import t, {Phrase} from '@models/Translate';
import {observer} from 'mobx-react-lite';
import Contact from '@components/Contact/Contact';
import Informer, {InformerBucket} from '@models/Informer';
import InWorkTag from '@components/InWorkTag';
import User from '@models/User';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';


const CafeListPage: React.FC = () => {
	const history = useHistory();
	const [cafesState, setCafesState] = React.useState<CafeCardProps[] | null>([]);
	const [informersState, setInformersState] = React.useState<Informer[]>([]);

	React.useEffect(() => {
		Http.fetchGet({
			path: '/places/',
		})
			.then((r) => {
				if (!r.ok) {
					console.log('response', {r});
					history.push('/auth');
					return null;
				}
				r.json().then(((data) => {
					if (!data || !Array.isArray(data)) {
						return null;
					}
					console.log('effect list', {data});
					data?.forEach((el) => {
						setCafesState((old) => [...old, {
							id: el.id,
							imageSrc: el['main_image'] || (el['images'] && el['images'][0]),
							name: el['full_name'] || el['short_name'],
							statuses: el.categories,
							averagePrice: el['average_bill'],
							workLoadText: el.occupancy,
							wifi: el.wifi,
							address: el.address,
							electricity: el['power_socket'],
							quiet: el.silence,
							light: el.light,
							time: el['opening_hours'] && el['opening_hours']['open_time'] && el['opening_hours']['close_time'] && `${el['opening_hours']['open_time']} - ${el['opening_hours']['close_time']}`,
							workLoad: el['work_places'],
							mapSrc: (el.address || el['full_name'] || el['short_name']) && `https://yandex.ru/maps/213/moscow/search/${el.address || el['full_name'] || el['short_name']}`,
						} as CafeCardProps]);
					});
				}));
			})
			.catch(() => setCafesState(null));
	}, []);

	React.useEffect(() => {
		InformerBucket.fetchInformers()
			.then((informers) => {
				console.log(`got informers = \n${JSON.stringify(informers, null, 4)}`);
				return informers;
			})
			.then(setInformersState)
			.catch((reason) => {
				console.log('error reason = ', reason.message);
				setInformersState([]);
			});
	}, []);

	const informersMemo = React.useMemo(() => informersState.map((informer: Informer) => informer.render()),
		[informersState]);

	const cafesMemo = React.useMemo(() => cafesState.map((cafe: CafeCardProps, index: number) => (
		<CafeCard {...cafe} key={`${index}-cafe`} className="cafes-list__card"/>
	)), [cafesState]);

	console.log(`cafe list: \n${JSON.stringify(informersState, null, 4)}`);

	const feed = React.useMemo(() => {
		const out = [];
		const cafes = [...cafesMemo];
		const informers = [...informersMemo];

		// формируем ленту, где каждая 5-я карточка
		// информер
		for (let i = 1; cafes.length > 0; i++) {
			out.push(cafes.shift());

			const needInsertInformer = i % 5 === 0;
			const canInsertInformer = informers.length > 0;

			if (needInsertInformer && canInsertInformer) {
				out.push(informers.shift());
			}
		}

		// в конце всегда будет новость при возможности
		// в первую очередь нужно для дебага, пока у нас
		// < 5 кафешек
		if (informers.length > 0) {
			out.push(informers.shift());
		}

		return out;
	}, [cafesMemo, informersMemo]);

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>,
			right: () => <InWorkTag/>,
		}}
		mainProps={{
			body: () => <div className="cafes-list">
				{
					cafesState !== null &&
					<>
						<Typo className="title" type={TypographyType.h2}
						      style={{padding: '16px', width: '100%'}}>
							{t(Phrase.allPlaces)}
						</Typo>
					</>
				}
				<div className="cafes-container">
					{feed}
				</div>
				{cafesState === null && <>
					<Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center}>
						{t(Phrase.technicalWork)}
					</Typo>
					<Typo block type={TypographyType.h5} textAlign={TypoTextAlign.center}>
						{t(Phrase.apologize)}
					</Typo>

					<Button onClick={() => history.push('/login')} full color={ButtonColor.accent}>
						{t(Phrase.tryAgain)}
					</Button>
				</>}

				{!User.isSubscribed && <SubscriptionCard/>}
				{feed &&
				<div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '28px'}}>
					<Contact/>
				</div>
				}
			</div>,
		}}
		footerProps={{}}
	/>);
};

export default observer(CafeListPage);
