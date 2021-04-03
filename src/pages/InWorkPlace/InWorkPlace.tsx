import './InWorkPlace.scss';
import React from 'react';
import {useHistory} from 'react-router-dom';
import QRCode from 'qrcode.react'
import BasePage from "@pages/BasePage";
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from "@components/primitives/Typo";
import Button, {ButtonColor} from "@components/primitives/Button";
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from '@network/Http';

interface InWorkPlaceProps {
	qrValue: string;
}

const InWorkPlace: React.FC<InWorkPlaceProps> = () => {
	const history = useHistory();
	const [uuid, setUuid] = React.useState('');

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
	});

	return uuid.length === 0 ? null :
		<BasePage
			headerProps={{middle: () => <CenterLogo/>}}
			mainProps={{
				body: () => <>
					<div style={{
						width: '40vw',
						height: '40vw',
					}} className="qr-code-card__background">
						<div style={{
							position: 'relative',
							top: '4vw',
							left: '4vw',
							width: '32vw',
							height: '32vw',
						}} className="qr-code-card__background-inner">
							<QRCode
								renderAs="svg"
								value={`${Http.serverUrl}/users/uuid/get/?subscribe_uuid=${uuid}`}
								style={{
									top: '4vw',
									left: '4vw',
									position: 'relative',
									borderRadius: 5,
									width: '24vw',
									height: '24vw',
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
						Подписка активирована
					</Typo>
					<Typo
						block
						type={TypographyType.h4}
						textAlign={TypoTextAlign.center}
						style={{marginBottom: 14, width: '40vw', margin: '0 auto 15px auto'}}
					>
						Предъявите этот код баристе и получайте
						бесплатный чай, скидки в кафе и
						неограниченный доступ рабочие пространства
					</Typo>

					<div style={{display: 'flex', justifyContent: 'center', marginBottom: 16}}>
						<Typo type={TypographyType.h4}>Дата истекания: <Typo
							type={TypographyType.h4}
							weight={TypoWeight.bold}>26 апреля</Typo></Typo>
					</div>

					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Button onClick={() => history.push('/places')}
						        style={{margin: '0 auto'}} color={ButtonColor.accentGrey}>
							Ко всем заведениям
						</Button>
					</div>
				</>,
			}}
		/>

};

export default InWorkPlace;
