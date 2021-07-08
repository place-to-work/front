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

	return <div
		style={{
			position: 'fixed',
			left: 0,
			bottom: 0,
			backgroundColor: 'white',
			zIndex: 1,
			borderRadius: '8px 8px 0 0',
			overflow: 'hidden',
			touchAction: 'none',
		}}
	>
		<CafeCard {...convertPlaceInnerToCafeCardProps(point)}/>
	</div>
}

export default ActivePlace;