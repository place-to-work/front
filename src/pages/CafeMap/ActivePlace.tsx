import React from 'react';
import {PlaceInnerType} from '@models/Places/PlacesTypes';
import CafeCard from '@components/CafeCard';
import {convertPlaceInnerToCafeCardProps} from '@components/CafeCard/CafeCard';

interface OwnProps {
	point: PlaceInnerType | null;
}

const ActivePlace: React.FC<OwnProps> = ({point}) => {
	if (point === null) {
		return null;
	}

	return <div style={{position: 'absolute', left: 0, bottom: 0}}>
		<CafeCard {...convertPlaceInnerToCafeCardProps(point)}/>
	</div>
}

export default ActivePlace;