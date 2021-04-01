import './InWorkPlace.scss';
import PageContainer from '@components/a11y/PageContainer';
import React from 'react';
import Header from '@components/a11y/Header';
import QRCode from 'qrcode.react';
import Main from '@components/a11y/Main';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Footer from '@components/a11y/Footer';
import Button, {ButtonColor} from '@components/primitives/Button';
import {useHistory} from 'react-router-dom';

interface InWorkPlaceProps {
	qrValue: string;
}

const InWorkPlace: React.FC<InWorkPlaceProps> = ({qrValue}) => {
	const history = useHistory();
	const baseSize = 360;
	return <PageContainer>
		<Header withBack />
		<Main style={{padding: 10, width: baseSize}}>
			<div style={{width: baseSize - 20, height: baseSize - 20}} className="qr-code-card__background">
				<div style={{width: baseSize - 60, height: baseSize - 60}} className="qr-code-card__background-inner">
					<QRCode
						renderAs="svg"
						value={qrValue || 'delme'}
						style={{top: 20, left: 20, position: 'relative', width: baseSize - 100, height: baseSize - 100, borderRadius: 5}}
					/>
				</div>
			</div>

			<Typo block type={TypographyType.h1} textAlign={TypoTextAlign.center}>Подписка активирована</Typo>
			<Typo block type={TypographyType.h3} textAlign={TypoTextAlign.center}>
				Предъявите этот код баристе и получайте
				бесплатный чай, скидки в кафе и
				неограниченный доступ рабочие пространства
			</Typo>
			<Typo type={TypographyType.h3}>Дата истекания: </Typo>
			<Typo type={TypographyType.h3} weight={TypoWeight.bold}>26 апреля</Typo>
			<Button element="a"
			        onClick={() => history.push('/cafes')}
			        full
			        color={ButtonColor.accentGrey}
			        >
				Ко всем заведениям
			</Button>

		</Main>
		<Footer style={{flexDirection: 'row-reverse', padding: 8}}>
			<Typo
				// element="a"
				href="/contact"
				block
				type={TypographyType.h5}
				style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
			>
				Свяжитесь с нами
			</Typo>
		</Footer>
	</PageContainer>
};

export default InWorkPlace;
