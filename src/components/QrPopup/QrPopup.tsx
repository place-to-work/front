import React from 'react';
import './QrPopup.scss';
import CrossIcon from '@components/primitives/Icon/components/CrossIcon';
import {IconColor} from '@components/primitives/Icon';
import QRCode from 'qrcode.react';
import Typo, {TypographyType} from '@components/primitives/Typo';
import t, {Phrase} from '@models/Translate';

interface OwnProps {
	link?: string;
	setLink?: (link?: string) => void;
}

const QrPopup: React.FC<OwnProps> = ({link, setLink}) => {
	if (!link) {
		return null;
	}

	return <div className="qr-popup__background">
		<div className="qr-popup">
			<CrossIcon
				style={{position: 'absolute', right: 18, top: 22}}
				color={IconColor.black}
				onClick={() => {
					console.log('cross icon clicked');
					if (setLink) {
						setLink(undefined);
					}
				}}
			/>
			<div className="qr-popup__contents">
				<QRCode
					className="qr-popup__qr"
					renderAs="svg"
					value={link}
				/>
				<Typo type={TypographyType.h4} style={{width: '80%', marginTop: 30, paddingLeft: 25}}>
					{t(Phrase.showQrBarista)}
				</Typo>
			</div>
		</div>
	</div>;
};

export default QrPopup;