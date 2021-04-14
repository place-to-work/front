import React from 'react';
import './InformerCard.scss';
import Informer from '@models/Informer/Informer';
import Typo, {TypographyType} from '@components/primitives/Typo';

export enum InformerCardType {
	dark,
	light,
}

interface OwnProps {
	informer: Informer;
	type: InformerCardType;
}

const InformerCard: React.FC<OwnProps> = ({type, informer}) => {
	const {title} = informer;
	const backgroundColorClass = type === InformerCardType.dark
		? 'informer-card-color-dark'
		: 'informer-card-color-light';
	const accentColorClass = type === InformerCardType.dark
		? 'informer-card-accent-dark'
		: 'informer-card-accent-light';


	return <div className={`informer-card ${backgroundColorClass}`}>
		<Typo block type={TypographyType.h6}>Апдейты</Typo>
		<Typo block type={TypographyType.h3}>{title}</Typo>
		<Typo block type={TypographyType.h5} className={accentColorClass}>
			Подробнее
		</Typo>
	</div>

}

export default InformerCard;