import React, {CSSProperties} from 'react';
import './QrCard.scss';
import QRCode from 'qrcode.react';

interface OwnProps {
	value: string;
	style?: CSSProperties;
}

const QrCard: React.FC<OwnProps> = ({value, ...rest}) => {
	const [cardRotated, setCardRotated] = React.useState(false);

	console.log('root domain = ', ROOT_DOMAIN);

	return <div
		className={`qr-code-card__background${cardRotated ? '-rotated' : ''}`}
		onClick={() => {
			setCardRotated(!cardRotated);
		}}
		{...rest}
	>
		<div className="qr-code-card__foreground">
			<QRCode
				className="qr-code-card"
				renderAs="svg"
				value={value.length > 0
					? `https://place-to-work.${ROOT_DOMAIN}/staff/${value}`
					: `https://place-to-work.${ROOT_DOMAIN}/places`}
			/>
		</div>
	</div>;
};

export default QrCard;