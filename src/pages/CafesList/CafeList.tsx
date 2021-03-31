import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {Cafe} from '@pages/CafePage/CafePage';

const CafeListPage: React.FC = () => {
	const cafes: Cafe[] = [];
	const [cafesState, setCafesState] = React.useState<CafeCardProps[]>([]);


	React.useEffect(()=>{
		Http.fetchGet({
			path: '/places/',
		})
			.then((r)=> {
				r.json().then(((data)=>{
					data.forEach((el)=>{
						setCafesState((old)=>[...old,{
							id: el.id,
							imageSrc: el['main_image'] || ( el['images'] && el['images'][0]),
							name: el['full_name'] || el['short_name'],
							statuses: el.categories,
							averagePrice: el['average_bill'],
							workLoadText: el.occupancy,
							wifi: el.wifi,
							electricity: el['power_socket'],
							quiet: el.silence,
							light: el.light,
							time: el['opening_hours'] && el['opening_hours']['open_time'] && el['opening_hours']['close_time'] &&`${el['opening_hours']['open_time']} - ${el['opening_hours']['close_time']}`,
							workLoad: el['work_places'],
							mapSrc: el['full_name'] || el['short_name'] && `https://yandex.ru/maps/213/moscow/search/${el['full_name'] || el['short_name']}`
						} as CafeCardProps]);
					});
				}));
			})
			.catch(console.log);
	},[]);

	const cafesMemo = React.useMemo(()=>cafesState.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} key={index}/>),[cafesState])

	return (<div className="cafes-list">
		<Typo className="title" type={TypographyType.h2}>Все заведения</Typo>
		{console.log({cafesState})}
		{cafesMemo}
	</div>);
};

export default observer(CafeListPage);
