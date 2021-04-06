import './InWorkPlace.scss';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import QRCode from 'qrcode.react'
import BasePage from "@pages/BasePage";
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from "@components/primitives/Typo";
import Button, {ButtonColor} from "@components/primitives/Button";
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from '@network/Http';
import BottomBar from "@components/a11y/BottomBar";
import {BackIcon, IconLeft, IconSize} from "@components/primitives/Icon";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";

interface InWorkPlaceProps {
	qrValue: string;
}

let dots = 0;
setInterval(() => {
	dots += 1;
	dots %= 3;
}, 500);


const InWorkPlace: React.FC<InWorkPlaceProps> = () => {
	const history = useHistory();
	const [uuid, setUuid] = React.useState('');
	const [cardRotated, setCardRotated] = React.useState(false);

	React.useEffect(() => {
		Http.fetchPost({path: '/users/uuid/', body: undefined})
			.then((response) => {
				if (response.ok) {
					response.json()
						.then((body) => {
							const uuid = body.subscribe_uuid;
							setUuid(uuid);
						})
				}
			})
	}, []);
	const store = useLocalStore(() => new UserStore());

	const date = new Date(store.user.subscribeDate);

	const day = date.getUTCDay();
	const m = date.getUTCMonth();
	const month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'][m];

	return <BasePage
			headerProps={{middle: () => <CenterLogo/>, left: ()=><BackIcon size={IconSize.m} onClick={()=>history.push('/places')}/>}}
			mainProps={{
				body: () => <>
					<div
						style={{
						width: '60vw',
						height: '60vw',
					}}
						className={`qr-code-card__background${cardRotated ? '-rotated' : ''}`}
						onClick={() => {
							console.log(`click: isRotated: ${cardRotated}`);
							setCardRotated(!cardRotated);
						}}
					>
						<div style={{
							position: 'relative',
							top: '6vw',
							left: '6vw',
							width: '48vw',
							height: '48vw',
						}} className="qr-code-card__background-inner">
							<QRCode
								renderAs="svg"
								value={uuid?.length ? `https://place-to-work.online/staff/${uuid}`: 'https://place-to-work.online/places'}
								style={{
									top: '6vw',
									left: '6vw',
									position: 'relative',
									borderRadius: 5,
									width: '36vw',
									height: '36vw',
								}}
							/>
						</div>
					</div>

					<Typo
						block
						type={TypographyType.h1}
						textAlign={TypoTextAlign.center}
						style={{lineHeight: 1, margin: '14px 35px 0'}}
					>
						{ uuid?.length ? 'Подписка активирована': 'Подписка не активирована' }
					</Typo>
					{Boolean(uuid?.length) && <Typo
						block
						type={TypographyType.h4}
						textAlign={TypoTextAlign.center}
						style={{marginBottom: 14, width: '40vw', margin: '0 auto 15px auto'}}
					>
						Предъявите этот код баристе и получайте
						бесплатный чай, скидки в кафе и
						неограниченный доступ в рабочие пространства
					</Typo>
					}

					{ Boolean(uuid?.length) && <div style={{display: 'flex', justifyContent: 'center', marginBottom: 16}}>
						<Typo type={TypographyType.h4}>Дата истечения: <Typo
							type={TypographyType.h4}
							weight={TypoWeight.bold}>{day}{' '}{month}</Typo></Typo>
					</div>
					}

					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Button onClick={() => history.push('/places')}
						        style={{margin: '0 auto'}} color={ButtonColor.accentGrey}>
							Ко всем заведениям
						</Button>
					</div>
					{!uuid?.length && <BottomBar/>}
				</>,
			}}
		/>

};

export default InWorkPlace;
