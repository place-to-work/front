import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Places from '@models/Places';
import {PlaceInnerType} from '@models/Places/PlacesTypes';
import {useHistory, useParams} from 'react-router-dom';
import ActivePlace from '@pages/CafeMap/ActivePlace';

const hardcodedApiKey = '71388d1c-1b81-4355-8a11-e3e4b5dbedd0';
const locale = 'ru_RU';

const InnerCafeMap: React.FC = () => {
	const history = useHistory();
	const {id} = useParams<{ id }>();
	const [places, setPlaces] = React.useState<PlaceInnerType[]>([]);
	const [activePlace, setActivePlace] = React.useState<PlaceInnerType | null>(null);
	console.log(`active place = ${JSON.stringify(activePlace, null, 4)}`)
	React.useEffect(() => {
		let isMounted = true;
		Places.getPlaces()
			.then((result) => {
				if (!isMounted) return;
				console.log(`places result: \n${JSON.stringify(result, null, 4)}`);
				if (result === null) {
					// no authorization
					console.log('no auth');
					history.push('/login/');
					return;
				}

				if (id !== undefined && id !== null) {
					const activeIdx = result.findIndex((el) => String(el.id) === String(id));
					console.log(`active place = ${JSON.stringify(result[activeIdx])}`);
					setActivePlace(result[activeIdx]);
				}
				setPlaces(result);
			});

		return () => {
			isMounted = false;
		};
	}, []);

	const placesPlacemarks = React.useMemo(
		() => {
			return places.map(
				(place, idx) => <Placemark
					key={idx}
					onClick={() => setActivePlace(place)}
					defaultGeometry={[place.latitude, place.longitude]}
					options={{
						iconColor: activePlace?.id === place.id ? '#FF774C' : 'black',
						preset: 'islands#icon'}}
				/>)
		},
		[places, setActivePlace, activePlace],
	);

	return <div>
			<YMaps query={{lang: locale, apikey: hardcodedApiKey}}>
				<Map
					style={{
						width: '100vw',
						height: 'calc(100vh - 60px)',
						margin: '-10px',
					}}
					defaultState={{
						center: [55.7522, 37.6156],
						zoom: 9,
					}}
					onClick={() => setActivePlace(null)}
				>
					{placesPlacemarks}
				</Map>
			</YMaps>
		<ActivePlace point={activePlace}/>
	</div>
}

export default InnerCafeMap;