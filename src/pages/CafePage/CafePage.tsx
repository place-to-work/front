import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Http from '@network/Http/Http';
import {CafeCardProps} from '@components/CafeCard/CafeCard';
import './CafePage.scss';
import BasePage from '@pages/BasePage';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import DetailedInfo from '@components/DetailedInfo';
import {observer} from 'mobx-react-lite';
import QrPopup from '@components/QrPopup';

const CafePage: React.FC = () => {
	const {id} = useParams<{ id }>();

	const [cafe, setCafe] = React.useState<CafeCardProps>();

	React.useEffect(() => {
		Http.fetchGet({
			path: `/places/${id}/`,
		})
			.then((r) => {
				r.json().then(((data) => {
					console.log('data', data);
					setCafe(
						{
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
				}));
			})
			.catch(console.log);
	}, []);

	const history = useHistory();

	return (<>
		<QrPopup/>
		<BasePage
			headerProps={{
				left: () => <div className="back-icon"><BackIcon
					size={IconSize.m}
					onClick={() => history.push('/places')}
				/></div>,
				// right: () => <InWorkTag/>,
				transparent: true,
			}}
			mainProps={{
				body: () => <>
					<div className="cafe-page">
						{cafe && <DetailedInfo {...cafe} />}
					</div>
				</>,
			}}/>
	</>);
};

export default observer(CafePage);