import React from 'react';
import './NotMobilePage.scss';
// @ts-ignore
import AppScreen from '@assets/appScreen.png';
// @ts-ignore
import CafeScreen from '@assets/cafeScreen.png';
import Icon, {IconSize, IconType} from '@components/primitives/Icon';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import ImageCard from '@components/primitives/ImageCard';
import QrCard from '@components/QrCard';


const NotMobilePage: React.FC = () => <main className="not-mobile-page__container">
	<div className="not-mobile-page__first-row">
		<Icon
			type={IconType.iconCenter}
			size={IconSize.xxl}
			style={{
				width: '20%',
				minWidth: '200px',
				maxWidth: '270px',
			}}
		/>
		<Typo
			type={TypographyType.h4}
			element={'a'}
			href={'https://place-to-work.ru'}
			color={TypoColor.accent}
		>
				place-to-work.ru
		</Typo>
	</div>
	<div className="not-mobile-page__second-row">
		<div className="not-mobile-page__second-row-left">
			<Typo
				type={TypographyType.h1}
				style={{
					lineHeight: 1,
					marginBottom: '5%',
					marginTop: '-5%',
				}}
				textAlign={TypoTextAlign.start}
			>
				Чтобы продолжить работу
				с сервисом, отсканируйте qr-код и
				зайдите с телефона
			</Typo>
			<Typo type={TypographyType.h4} textAlign={TypoTextAlign.start}>
				В мобильной версии Вы
				сможете воспользоваться
				всеми преимуществами
				Рабочего места.
			</Typo>
		</div>
		<div style={{position: 'relative'}}>
			<ImageCard
				scalable
				style={{
					width: '222px',
					height: '441px',
					position: 'absolute',
					top: '5%',
					zIndex: 1,
				}}
				imageSrc={AppScreen}
			/>
			<ImageCard
				scalable
				style={{
					width: '227px',
					height: '183px',
					position: 'absolute',
					top: 'calc(5% + 94px)',
					left: '140px',
				}}
				imageSrc={CafeScreen}
			/>
			<div className="not-mobile-page__qr">
				<QrCard
					value={'https://place-to-work.ru'}
					style={{
						width: 315,
						height: 315,
					}}
				/>
			</div>
		</div>
	</div>
</main>;

export default NotMobilePage;