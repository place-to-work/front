import React from 'react';
import './DiscountPage.css';
import BasePage from '@pages/BasePage';
import {IconColor} from '@components/primitives/Icon';
import CrossIcon from '@components/primitives/Icon/components/CrossIcon';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Button from '@components/primitives/Button';
import {useHistory, useLocation} from 'react-router-dom';
import Http from '@network/Http';

const backgroundColor = 'black';
const padding = 24;
const DiscountPage: React.FC = () => {
	const history = useHistory();
	const search = useLocation().search;
	const uuid = new URLSearchParams(search).get('uuid');
	const promotion = new URLSearchParams(search).get('promotion');
	console.log(`uuid = ${uuid}, promo = ${promotion}`);

	return <BasePage
		headerProps={{
			style: {backgroundColor: backgroundColor, borderColor: backgroundColor},
			right: () => <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
				<CrossIcon color={IconColor.white} onClick={() => history.goBack()}/>
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
			right: () => <Button full onClick={() => {
				Http.fetchPost({
					path: '/products/choice/',
					body: JSON.stringify({user: uuid, promotion}),
				}).then(console.log);
			}}>
				Сделать скидку
			</Button>,
		}}
	>
	</BasePage>;
};

export default DiscountPage;