import React from 'react';
import './QrPopup.scss';

interface OwnProps {
	link?: string;
}

const QrPopup: React.FC<OwnProps> = ({}) => <div className="qr-popup__background">
	<div className="qr-popup">

	</div>
</div>;

export default QrPopup;