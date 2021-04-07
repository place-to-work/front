import React, {CSSProperties} from 'react';
import {MessageModel} from '@models/Message';
import './MessageComponent.scss';
import Typo, {TypographyType, TypoTextAlign, TypoVerticalAlign} from '@components/primitives/Typo';
import Icon, {IconType} from '@components/primitives/Icon';

interface OwnProps {
	message: MessageModel,
	idx: number,
}

export const MessageComponent: React.FC<OwnProps> = ({message, idx}) => {
	const [style, setStyle] = React.useState<CSSProperties>({});
	React.useEffect(() => {
		setStyle({top: idx * 52});

		setTimeout(() => setStyle({}), 2300);
	}, []);
	return <div className="message" style={style}>
		<Typo
			style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
			type={TypographyType.h4}
			textAlign={TypoTextAlign.center}
			verticalAlign={TypoVerticalAlign.middle}
		>
			<Icon type={IconType.warning}/>
			{message.message}
		</Typo>
	</div>;
};