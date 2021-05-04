import React from 'react';
import './DiscountPage.css';
import BasePage from '@pages/BasePage';
import {IconColor} from '@components/primitives/Icon';
import CrossIcon from '@components/primitives/Icon/components/CrossIcon';
import Typo, {TypoColor, TypographyType, TypoWeight} from '@components/primitives/Typo';
import Button from '@components/primitives/Button';
import {useHistory, useLocation} from 'react-router-dom';
import Http from '@network/Http';
import t, {Phrase} from '@models/Translate';

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
				<CrossIcon color={IconColor.white} onClick={() => {
					console.log('history.push places');
					history.push('/places');
				}}/>
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
					{t(Phrase.qrConfirmedMain)}
				</Typo>
				<Typo
					color={TypoColor.white}
					type={TypographyType.h4}
					style={{marginTop: '5%'}}
				>
					{t(Phrase.qrConfirmedAdditional)}
				</Typo>
			</>,
		}}
		footerProps={{
			style: {backgroundColor: backgroundColor, borderColor: backgroundColor, padding: padding},
			right: () => <Button full onClick={() => {
				Http.makeDiscount(uuid, promotion)
					.then((response) => {
						if (response === null) {
							return null;
						}
						console.log('successfull discount');
						return response;
					})
			}}>
				Сделать скидку
			</Button>,
		}}
	>
	</BasePage>;
};

export default DiscountPage;