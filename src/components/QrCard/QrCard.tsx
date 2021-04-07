import React from 'react';
import './QrCard.scss';
import QRCode from 'qrcode.react';

interface OwnProps {
	value: string;
}

const QrCard: React.FC<OwnProps> = ({value}) => {
	const [cardRotated, setCardRotated] = React.useState(false);

	return <div
		className={`qr-code-card__background${cardRotated ? '-rotated' : ''}`}
		onClick={() => {
			console.log(`click: isRotated: ${cardRotated}`);
			setCardRotated(!cardRotated);
		}}
	>
		<div className="qr-code-card__foreground">
			<QRCode
				className="qr-code-card"
				renderAs="svg"
				value={value.length > 0 ? `https://place-to-work.online/staff/${value}` : 'https://place-to-work.online/places'}
			/>
		</div>
	</div>;
};

export default QrCard;