import React, {CSSProperties} from 'react';
import Typo, {TypoColor, TypographyType} from '@components/primitives/Typo';
import {useHistory} from 'react-router-dom';


interface OwnProps {
	isList: boolean;
	style: CSSProperties;
}

const CafeViewButton: React.FC<OwnProps> = ({isList, style}) => {
	const listButtonBackground = isList ? 'black' : 'white';
	const listButtonColor = isList ? TypoColor.white : TypoColor.black;

	const mapButtonBackground = isList ? 'white' : 'black';
	const mapButtonColor = isList ? TypoColor.black : TypoColor.white;

	const history = useHistory();

	return <div style={{
		...style,
		height: 38,
		width: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
	}}>
		<div style={{
			borderRadius: 8,
			width: 327,
			height: '100%',
			margin: '0 auto',
			backgroundColor: '#F2F2F2',
			display: 'flex',
		}}>
			<div style={{
				backgroundColor: listButtonBackground,
				borderRadius: 8,
			}}
			     onClick={() => {
				     if (!isList) {
					     history.push('/places');
				     }
			     }}
			>
				<Typo color={listButtonColor} type={TypographyType.h5}>
					Списком
				</Typo>
			</div>

			<div style={{
				backgroundColor: mapButtonBackground,
				borderRadius: 8,
			}}
			     onClick={() => {
				     if (isList) {
					     history.push('/places-map');
				     }
			     }}
			>
				<Typo color={mapButtonColor} type={TypographyType.h5}>
					На карте
				</Typo>
			</div>
		</div>
	</div>
}

export default CafeViewButton;