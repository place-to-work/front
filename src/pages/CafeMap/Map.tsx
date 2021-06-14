import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Places from '@models/Places';
import {PlaceInnerType} from '@models/Places/PlacesTypes';
import {useHistory} from 'react-router-dom';

const hardcodedApiKey = '71388d1c-1b81-4355-8a11-e3e4b5dbedd0';
const locale = 'ru_RU';

const InnerCafeMap: React.FC = () => {
	const history = useHistory();
	const [places, setPlaces] = React.useState<PlaceInnerType[]>([]);
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
					onClick={() => alert('Hello!!!')}
					defaultGeometry={[place.latitude, place.longitude]}
					options={{iconColor: 'black', preset: 'islands#icon'}}
				/>)
		},
		[places],
	);

	return <YMaps query={{lang: locale, apikey: hardcodedApiKey}}>
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
		>
			{placesPlacemarks}
		</Map>
	</YMaps>
}

export default InnerCafeMap;