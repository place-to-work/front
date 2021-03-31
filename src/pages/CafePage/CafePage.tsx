import React from 'react';
import {observer} from 'mobx-react-lite';
import DetailedInfo from '@components/DetailedInfo';
import Header from '@components/a11y/Header';
import { useParams } from 'react-router-dom';
import Http from '@network/Http/Http';
import {CafeCardProps} from '@components/CafeCard/CafeCard';

export type Cafe = {
	imageSrc?: string;
	name?: string;
	address?: string;
	time?: string;

	// Иконки
	wifi?:boolean;
	light?:boolean;
	electricity?:boolean;
	quiet?:boolean;

	// Подробная информация на странице кафе
	statuses?: string[];
	gallery?: string[];
	workLoad?: number;
	workLoadText?: string;
	averagePrice?: string;
	mapSrc?: string;

};

const CafePage: React.FC = () => {
	const { id } = useParams();

	const [cafe, setCafe] = React.useState<CafeCardProps>();




	React.useEffect(()=>{
		Http.fetchGet({
			path: `/places/${id}/`,
		})
			.then((r)=> {
				r.json().then(((data)=>{
					setCafe(
						{
							imageSrc:data['main-image'],
							name: data['full-name'],
							statuses: data.categories,
							averagePrice: data['average_bill'],
							workLoadText: data.occupancy,
							wifi: data.wifi,
							electricity: data['power_socket'],
							quiet: data.silence,
							light: data.light,
							time: `${data['opening_hours']['open_time']} - ${data['opening_hours']['close_time']} }`,
							workLoad: data['work_places']
						});
				}));
			})
			.catch(console.log);
	},[]);



	return (
		<div className="cafe-page">
			<Header/>
			<DetailedInfo {...cafe} />
		</div>);
};

export default observer(CafePage);