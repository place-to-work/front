import './InWorkPlace.scss';
import React from 'react';
import {useHistory} from 'react-router-dom';

interface InWorkPlaceProps {
	qrValue: string;
}

const InWorkPlace: React.FC<InWorkPlaceProps> = ({qrValue}) => {
	const history = useHistory();
	const baseSize = 360;
	return null;
	// return <PageContainer>
	// 	<Header withBack />
	// 	<Main style={{padding: 10, width: baseSize}}>
	// 		<div style={{width: baseSize - 20, height: baseSize - 20}} className="qr-code-card__background">
	// 			<div style={{width: baseSize - 60, height: baseSize - 60}} className="qr-code-card__background-inner">
	// 				<QRCode
	// 					renderAs="svg"
	// 					value={qrValue || 'delme'}
	// 					style={{top: 20, left: 20, position: 'relative', width: baseSize - 100, height: baseSize - 100, borderRadius: 5}}
	// 				/>
	// 			</div>
	// 		</div>
	//
	// 		<Typo
	// 			block
	// 			type={TypographyType.h1}
	// 			textAlign={TypoTextAlign.center}
	// 			style={{lineHeight: 1, margin: '14px 0'}}
	// 		>
	// 			Подписка активирована
	// 		</Typo>
	// 		<Typo
	// 			block
	// 			type={TypographyType.h4}
	// 			textAlign={TypoTextAlign.center}
	// 			style={{marginBottom: 14, width: 320}}
	// 		>
	// 			Предъявите этот код баристе и получайте
	// 			бесплатный чай, скидки в кафе и
	// 			неограниченный доступ рабочие пространства
	// 		</Typo>
	//
	// 		<div style={{display: 'flex', justifyContent: 'center', marginBottom: 16}}>
	// 			<Typo type={TypographyType.h4}>Дата истекания: <Typo type={TypographyType.h4} weight={TypoWeight.bold}>26 апреля</Typo></Typo>
	// 		</div>
	//
	// 		<Button element="a"
	// 		        onClick={() => history.push('/places')}
	// 		        full
	// 		        color={ButtonColor.accentGrey}
	// 		        >
	// 			Ко всем заведениям
	// 		</Button>
	//
	// 	</Main>
	// 	<Footer style={{flexDirection: 'row-reverse', padding: 8}}>
	// 		<Typo
	// 			// element="a"
	// 			href="/contact"
	// 			block
	// 			type={TypographyType.h5}
	// 			style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
	// 		>
	// 			Свяжитесь с нами
	// 		</Typo>
	// 	</Footer>
	// </PageContainer>
};

export default InWorkPlace;
