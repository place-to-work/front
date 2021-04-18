import React from 'react';
import './EventInformerCard.scss';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import {EventInformer} from '@models/Informer';
import {IconColor, LocationIcon} from '@components/primitives/Icon';
import {useHistory} from 'react-router-dom';
import ym from 'react-yandex-metrika';


const EventInformerCard: React.FC<EventInformer> = ({
	title,
	text,
	optionalFields,
}) => {
	const history = useHistory();
	const [isBrief, setIsBrief] = React.useState(true);

	return <div className={'informer-card'}>
		<Typo key="upd" block type={TypographyType.h6}>Апдейты</Typo>
		<Typo key="title" block type={TypographyType.h3}>{title}</Typo>
		{optionalFields.places.map((place, index) => <Typo
			key={index}
			icon={<LocationIcon color={IconColor.white}/>}
			block
			type={TypographyType.h4}
			style={{cursor: 'pointer'}}
			onClick={() => history.push(place.url)}
		>
			{place.name}
		</Typo>,
		)}
		<Typo
			key="details"
			block
			type={TypographyType.h5}
			textAlign={TypoTextAlign.end}
			color={isBrief ? TypoColor.black : TypoColor.accent}
			onClick={() =>{
				console.log('Кнопка подробнее в информере test');
				ym('reachGoal','Кнопка подробнее в информере');
				setIsBrief(false);
			}}
			style={{
				cursor: isBrief ? 'pointer' : 'auto',
				marginTop: 15,
			}}
		>
			Подробнее
		</Typo>
		{isBrief ? null :
			<Typo key="text" block type={TypographyType.h4}>{text}</Typo>
		}
	</div>;
};

export default EventInformerCard;