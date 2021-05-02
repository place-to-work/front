import React from 'react';
import './DiscountPage.css';
import BasePage from '@pages/BasePage';
import {IconColor} from '@components/primitives/Icon';
import CrossIcon from '@components/primitives/Icon/components/CrossIcon';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Button from '@components/primitives/Button';

const backgroundColor = 'black';
const padding = 24;
const DiscountPage: React.FC = () => <BasePage
	headerProps={{
		style: {backgroundColor: backgroundColor, borderColor: backgroundColor},
		right: () => <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
			<CrossIcon color={IconColor.white} onClick={() => console.log('cross icon clicked')}/>
		</div>,
	}}
	mainProps={{
		style: {
			backgroundColor: backgroundColor,
			borderColor: backgroundColor,
			paddingLeft: padding,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		body: () => <>
			<Typo
				color={TypoColor.white}
				type={TypographyType.h1}
				weight={TypoWeight.extraRegular}
				style={{lineHeight: 1}}
			>
				QR-код подтвержден, можно сделать скидку
			</Typo>
			<Typo
				color={TypoColor.white}
				type={TypographyType.h4}
				style={{marginTop: '5%'}}
			>
				Тут может быть какая-то инфа о покупателе например
				тут может быть еще какой-то текст о покупателе например
			</Typo>
		</>,
	}}
	footerProps={{
		style: {backgroundColor: backgroundColor, borderColor: backgroundColor, padding: padding},
		right: () => <Button full>На главный экран</Button>,
	}}
>
</BasePage>;

export default DiscountPage;