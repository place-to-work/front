import React, {CSSProperties} from 'react';
import './QrCard.scss';
import QRCode from 'qrcode.react';

interface OwnProps {
	value: string;
	style?: CSSProperties;
}

const QrCard: React.FC<OwnProps> = ({value, ...rest}) => {
	const [cardRotated, setCardRotated] = React.useState(false);

	return <div
		className={`qr-code-card__background${cardRotated ? '-rotated' : ''}`}
		onClick={() => {
			setCardRotated(!cardRotated);
		}}
		{...rest}
	>
		<div className="qr-code-card__foreground">
			{value.length > 0 &&
				<QRCode
					className="qr-code-card"
					renderAs="svg"
					value={value}
				/>
			}
		</div>
	</div>;
};

export default QrCard;