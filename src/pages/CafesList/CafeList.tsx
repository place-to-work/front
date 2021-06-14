import React from 'react';
import CafeCard, {CafeCardProps, convertPlaceInnerToCafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import './CafeList.scss';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import Button, {ButtonColor} from '@components/primitives/Button';
import t, {Phrase} from '@models/Translate';
import {observer} from 'mobx-react-lite';
import Contact from '@components/Contact/Contact';
import Informer, {InformerBucket} from '@models/Informer';
import User from '@models/User';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';
import Places from '@models/Places';
import CafeMapButton from '@pages/CafesList/CafeMapButton';


const CafeListPage: React.FC = () => {
	const history = useHistory();
	const [cafesState, setCafesState] = React.useState<CafeCardProps[] | null>([]);
	const [informersState, setInformersState] = React.useState<Informer[]>([]);

	React.useEffect(() => {
		Places.getPlaces()
			.then((result) => {
				console.log(`result = ${JSON.stringify(result, null, 4)}`);
				if (result === null) {
					history.push('/auth');
					return;
				}
				setCafesState(result.map(convertPlaceInnerToCafeCardProps));
			})
			.catch(() => setCafesState(null));
	}, []);

	React.useEffect(() => {
		InformerBucket.fetchInformers()
			.then((informers) => {
				return informers;
			})
			.then(setInformersState)
			.catch(() => {
				setInformersState([]);
			});
	}, []);

	const informersMemo = React.useMemo(() => informersState.map((informer: Informer) => informer.render()),
		[informersState]);

	const cafesMemo = React.useMemo(() => {
		if (cafesState !== null) {
			return cafesState.map((cafe: CafeCardProps, index: number) => (
				<CafeCard {...cafe} key={`${index}-cafe`} className="cafes-list__card"/>
			));
		} else {
			return [];
		}
	}, [cafesState]);


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
		// if(!User.isSubscribed) {
		// 	out.push(<SubscriptionCard/>);
		// }
		return out;
	}, [cafesMemo, informersMemo, User.isSubscribed]);

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>
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
				{!User.isSubscribed && cafesState && cafesState.length > 0 && <SubscriptionCard/>}
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

				{feed &&
				<div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '28px'}}>
					<Contact/>
				</div>
				}
			</div>,
		}}
		footerProps={{left: () => <CafeMapButton/>}}
	/>);
};

export default observer(CafeListPage);
