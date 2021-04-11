import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {useHistory} from 'react-router-dom';
import BottomBar from '@components/a11y/BottomBar';
import BasePage from '@pages/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import Tag from '@components/primitives/Tag';
import Button, {ButtonColor} from '@components/primitives/Button';
import t, {Phrase} from '@models/Translate';
import {observer} from 'mobx-react-lite';
import InWorkTag from '@components/InWorkTag';
import Contact from '@components/Contact/Contact';
import Footer from '@pages/BasePage/Footer';


const CafeListPage: React.FC = () => {

	const [cafesState, setCafesState] = React.useState<CafeCardProps[] | null>([]);

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


	const history = useHistory();
	const cafesMemo = React.useMemo(() => cafesState.map((cafe: CafeCardProps, index: number) => (
		<CafeCard {...cafe} key={index}/>
	)), [cafesState]);

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>,
			right: () => <InWorkTag/>,
		}}
		 mainProps={{
			body: () => <>
				{cafesState !== null &&
			<Typo className="title" type={TypographyType.h2} style={{padding: '16px 0', width:'100%'}}>
				{t(Phrase.allPlaces)}
			</Typo>}
				<div>
					{cafesMemo}
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
				{cafesMemo && <div style={{display:'flex', justifyContent:'flex-end', marginTop:'28px'}}>
					<Contact/>
				</div>
				}
				<BottomBar/>
			</>,
		}}
		footerProps={{}}
	/>);
};

export default observer(CafeListPage);
