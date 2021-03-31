import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {Cafe} from '@pages/CafePage/CafePage';

const CafeListPage: React.FC = () => {
	const cafes: Cafe[] = [];
	const [cafesState, setCafesState] = React.useState<Cafe[]>([]);


	React.useEffect(()=>{
		Http.fetchGet({
			path: '/places/',
		})
			.then((r)=> {
				r.json().then(((data)=>{
					data.forEach((el)=>{
						setCafesState((old)=>[...old,{
							id: el.id,
							imageSrc: data['main_image'] || ( data['images'] && data['images'][0]),
							name: data['full_name'] || data['short_name'],
							statuses: el.categories,
							averagePrice: el['average_bill'],
							workLoadText: el.occupancy,
							wifi: el.wifi,
							electricity: el['power_socket'],
							quiet: el.silence,
							light: el.light,
							time: data['opening_hours'] && data['opening_hours']['open_time'] && data['opening_hours']['close_time'] &&`${data['opening_hours']['open_time']} - ${data['opening_hours']['close_time']}`,
							workLoad: el['work_places'],
							mapSrc: data['full_name'] || data['short_name'] && `https://yandex.ru/maps/213/moscow/search/${data['full_name'] || data['short_name']}`
						}]);
					});
				}));
			})
			.catch(console.log);
	},[]);

	const cafesMemo = React.useMemo(()=>cafesState.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} key={index}/>),[cafesState])

	return (<div className="cafes-list">
		<Typo className="title" type={TypographyType.h2}>Все заведения</Typo>
		{cafesMemo}
	</div>);
};

export default observer(CafeListPage);
