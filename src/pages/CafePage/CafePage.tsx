import React from 'react';
import {observer} from 'mobx-react-lite';
import DetailedInfo from '@components/DetailedInfo';
import Header from '@components/a11y/Header';
import { useParams } from 'react-router-dom';
import Http from '@network/Http/Http';
import {CafeCardProps} from '@components/CafeCard/CafeCard';

// export type Cafe = {
// 	id: string;
// 	imageSrc?: string;
// 	name?: string;
// 	address?: string;
// 	time?: string;
//
// 	// Иконки
// 	wifi?:boolean;
// 	light?:boolean;
// 	electricity?:boolean;
// 	quiet?:boolean;
// 	images?: string[];
//
// 	// Подробная информация на странице кафе
// 	statuses?: string[];
// 	gallery?: string[];
// 	workLoad?: number;
// 	workLoadText?: string;
// 	averagePrice?: string;
// 	mapSrc?: string;
//
// };

const CafePage: React.FC = () => {
	const { id } = useParams();

	const [cafe, setCafe] = React.useState<CafeCardProps>();

	React.useEffect(()=>{
		Http.fetchGet({
			path: `/places/${id}/`,
		})
			.then((r)=> {
				r.json().then(((data)=>{
					console.log('data', data)
					setCafe(
						{
							id: data.id,
							imageSrc: data['main_image'] || ( data['images'] && data['images'][0]),
							name: data['full_name'] || data['short_name'],
							statuses: data.categories,
							averagePrice: data['average_bill'],
							workLoadText: data.occupancy,
							wifi: data.wifi,
							images: data['images'],
							electricity: data['power_socket'],
							quiet: data.silence,
							light: data.light,
							time: data['opening_hours'] && data['opening_hours']['open_time'] && data['opening_hours']['close_time'] &&`${data['opening_hours']['open_time']} - ${data['opening_hours']['close_time']}`,
							workLoad: data['work_places'],
							mapSrc: data['full_name'] || data['short_name'] && `https://yandex.ru/maps/213/moscow/search/${data['full_name'] || data['short_name']}`
						});
				}));
			})
			.catch(console.log);
	},[]);



	return (
		<div className="cafe-page">
			<Header/>
			{cafe && <DetailedInfo {...cafe} />}
		</div>);
};

export default observer(CafePage);