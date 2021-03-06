import React, {CSSProperties} from 'react';
import {Notification, NotifType} from '@models/Notification';
import './NotificationComponent.scss';
import Typo, {TypographyType, TypoTextAlign, TypoVerticalAlign} from '@components/primitives/Typo';
import {LightIcon, WarningIcon} from '@components/primitives/Icon';

interface OwnProps {
	notification: Notification,
	idx: number,
}

export const NotificationComponent: React.FC<OwnProps> = ({notification, idx}) => {
	const [style, setStyle] = React.useState<CSSProperties>({});
	React.useEffect(() => {
		setStyle({top: idx * 52});

		setTimeout(() => setStyle({}), 2300);
	}, []);
	return <div className="notification" style={style}>
		<Typo
			style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex:11111}}
			type={TypographyType.h4}
			textAlign={TypoTextAlign.center}
			verticalAlign={TypoVerticalAlign.middle}
		>
			{notification.type === NotifType.error ? <WarningIcon/> : <LightIcon/>}
			{notification.message}
		</Typo>
	</div>;
};