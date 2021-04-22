import React, {CSSProperties} from 'react';
import './QrCard.scss';
import QRCode from 'qrcode.react';
import cn from 'classnames';

interface OwnProps {
	value: string;
	style?: CSSProperties;
	disabled?: boolean;
}

const QrCard: React.FC<OwnProps> = ({value, disabled = false, ...rest}) => {
	const [cardRotated, setCardRotated] = React.useState(false);

	return <div
		className={`qr-code-card__background${cardRotated ? '-rotated' : ''}`}
		onClick={() => {
			setCardRotated(!cardRotated);
		}}
		{...rest}
	>
		{disabled && <div className="disabled-background"/>}
		<div className={cn('qr-code-card__foreground')}>
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