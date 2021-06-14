import Typo, {TypographyType} from '@components/primitives/Typo';
import {ClockIcon, IconColor, LocationIcon} from '@components/primitives/Icon';
import * as React from 'react';
import './CafeInfo.scss';
import {useHistory} from 'react-router-dom';

type Props = {
	address?: string;
	time?: string;
	id?: string;
}
const CafeInfo: React.FC<Props> = ({address, time, id}) => {
	const history = useHistory();

	return <div className="cafe-card__info">
		{address &&
		<Typo
			icon={<LocationIcon color={IconColor.black}/>}
			className="cafe-card__info-text"
			block
			onClick={() => {
				if (id) {
                                        history.push(`/places-map/${id}`);
				}
			}}
			type={TypographyType.h4}>{address}</Typo>
		}
		{time && <Typo icon={<ClockIcon color={IconColor.black}/>} className="cafe-card__info-text" block
		               type={TypographyType.h4}>{time}</Typo>}
	</div>
};

export default CafeInfo;