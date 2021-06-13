import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';

const hardcodedApiKey = '71388d1c-1b81-4355-8a11-e3e4b5dbedd0';
const locale = 'ru_RU';

const InnerCafeMap: React.FC = () => {

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
			<Placemark
				defaultGeometry={[55.751574, 37.573856]}
				options={{iconColor: 'black', preset: 'islands#dotIcon'}}
			/>
		</Map>
	</YMaps>
}

export default InnerCafeMap;