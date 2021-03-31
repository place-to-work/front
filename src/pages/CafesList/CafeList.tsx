import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
import {Cafe} from '@pages/CafePage/CafePage';

// const data: CafeCardProps[] = [
// 	{
// 		id: '1',
// 		name: 'Заведение "Ветерок"'
// 	},
// 	{
// 		id: '2',
// 		name: 'Заведение "Пушок"'
// 	},
// 	{
// 		id: '3',
// 		name: 'Заведение "Котелок"'
// 	},
// 	{
// 		id: '4',
// 		name: 'Заведение "Коворкинг"'
// 	},
// 	{
// 		id: '5',
// 		name: 'Заведение "Музей"'
// 	},
//
// ];
const CafeListPage: React.FC = () => {
	const cafes: Cafe[] = [];


	const setCafes = (data:any[]) =>{
		data.forEach((el)=>{
			cafes.push({
				imageSrc:el['main-image'],
				name: el['full-name'],
				statuses: el.categories,
				averagePrice: el['average_bill'],
				workLoadText: el.occupancy,
				wifi: el.wifi,
				electricity: el['power_socket'],
				quiet: el.silence,
				light: el.light,
				time: `${el['opening_hours']['open_time']} - ${el['opening_hours']['close_time']} }`,
				workLoad: el['work_places']
			});
		});
	};

	React.useEffect(()=>{
		Http.fetchPost({
			path: '/places/',
			body: null,
		})
			.then((r)=> {
				r.json().then(((data)=>{
					setCafes(data || data);
				}));
			})
			.catch(console.log);
	},[]);


	return (<div className="cafes-list">
		<Typo className="title" type={TypographyType.h2}>Все заведения</Typo>
		{' '}
		{cafes.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} key={index}/>)}
	</div>);
};

export default observer(CafeListPage);
