import React from 'react';
import {useParams} from 'react-router-dom';
import Http from '@network/Http/Http';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import './CafePage.scss';
import BasePage from '@pages/BasePage';
import DetailedInfo from '@components/DetailedInfo';
import {observer} from 'mobx-react-lite';
import {PromoCardProps} from '@components/PromoCard/PromoCard';

const normalizePlace = (data: any):CafeCardProps =>({
	id: data.id,
	imageSrc: data['main_image'] || (data['images'] && data['images'][0]),
	name: data['full_name'] || data['short_name'],
	statuses: data.categories,
	averagePrice: data['average_bill'],
	workLoadText: data.occupancy,
	address: data.address,
	wifi: data.wifi,
	images: data['images'],
	electricity: data['power_socket'],
	quiet: data.silence,
	light: data.light,
	time: data['opening_hours'] && data['opening_hours']['open_time'] && data['opening_hours']['close_time'] && `${data['opening_hours']['open_time']} - ${data['opening_hours']['close_time']}`,
	workLoad: data['work_places'],
	mapSrc: (data.address || data['full_name'] || data['short_name']) && `https://yandex.ru/maps/213/moscow/search/${data.address || data['full_name'] || data['short_name']}`,
});

const normalizePromotions = (data:any[]):PromoCardProps[] => {
	if(!data || !data.length){
		return [];
	}
	console.log('norm', data);
	return data.map((data:any):PromoCardProps => ({
		id: data.pk,
		img: data.image,
		title: data.title,
		subtitle: data['discount_value']
	}));
};

const CafePage: React.FC = () => {
	const {id} = useParams<{ id }>();

	const [cafe, setCafe] = React.useState<CafeCardProps>();
	const [promotions, setPromotions] = React.useState<PromoCardProps[]>();

	React.useEffect(() => {
		Promise.all([
			Http.fetchGet({
				path: `/places/${id}/`,
			})
				.then((r) => {
					r.json().then(((data) => {
						setCafe(normalizePlace(data));
					}));
				})
				.catch(console.log),

			Http.fetchGet({
				path: `/places/${id}/promotions`,
			})
				.then((r) => {
					r.json().then(((data) => {
						if(!data || !data.length){
							return;
						}
						console.log('tetete',{data});
						setPromotions(normalizePromotions(data));
					}));
				})
				.catch(console.log)
		]);
	}, []);

	return (<BasePage
		mainProps={{
			body: () => <>
				<div className="cafe-page">
					{cafe && <DetailedInfo {...cafe} promotions={promotions} />}
				</div>
			</>,
		}}/>);
};

export default observer(CafePage);