import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {Cafe} from '@pages/CafePage/CafePage';
import Header from "@components/a11y/Header";
import PageContainer from '@components/a11y/PageContainer';
import Main from '@components/a11y/Main';

const CafeListPage: React.FC = () => {
	const cafes: Cafe[] = [];
	const [cafesState, setCafesState] = React.useState<CafeCardProps[]>([]);


	React.useEffect(() => {
		Http.fetchGet({
			path: '/places/',
		})
			.then((r) => {
				r.json().then(((data) => {
					data.forEach((el) => {
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
							time: el['opening_hours'] && el['opening_hours']['open_time'] && el['opening_hours']['close_time'] &&`${el['opening_hours']['open_time']} - ${el['opening_hours']['close_time']}`,
							workLoad: el['work_places'],
							mapSrc: (el.address || el['full_name'] || el['short_name'] )&& `https://yandex.ru/maps/213/moscow/search/${el.address || el['full_name'] || el['short_name']}`
						} as CafeCardProps]);
					});
				}));
			})
			.catch(console.log);
	}, []);

	const cafesMemo = React.useMemo(()=>cafesState.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} key={index}/>),[cafesState])

	return (<PageContainer>
		<Header/>
		<Main style={{padding: '10px', width: 360}}>
		<Typo className="title" type={TypographyType.h2} style={{padding: '16px 0'}}>Все заведения</Typo>
		{cafesMemo}
	</Main></PageContainer>);
};

export default observer(CafeListPage);
