import * as React from 'react';
import './SubscriptionCard.scss';
import {CheckIcon, CupIcon, IconColor, IconSize, LaptopIcon, WorkIcon} from '@components/primitives/Icon';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import Separator from '@components/primitives/Separator';
import PaymentButtons from '@components/a11y/PaymentButtons';


const SubscriptionCard: React.FC = () => {
	return (
		<div className="card-container">
			<div className="card">
				<Typo color={TypoColor.white} type={TypographyType.h3} textAlign={TypoTextAlign.start}
				      block
				      style={{lineHeight: '24px', marginTop: 24, fontWeight: 500}}
				>
					Подписка на сервиc
				</Typo>
				<div className="card__features">
					<Typo
						color={TypoColor.white}
						icon={<CupIcon color={IconColor.white} className="card__icon"
						               size={IconSize.xs}/>}
						type={TypographyType.h4}
					>
						Безлимитный чай и кофе
					</Typo>
					<Typo
						color={TypoColor.white}
						icon={<WorkIcon color={IconColor.white} className="card__icon"
						                size={IconSize.xs}/>}
						type={TypographyType.h4}
					>
						Дружное коммьюнити
					</Typo>
					<Typo
						color={TypoColor.white}
						icon={<LaptopIcon color={IconColor.white} className="card__icon"
						                  size={IconSize.xs}/>}
						type={TypographyType.h4}>
						Крутой мерч
					</Typo>
					<Typo
						color={TypoColor.white}
						icon={<CheckIcon color={IconColor.white} className="card__icon"
						                 size={IconSize.xs}/>}
						type={TypographyType.h4}
					>
						Бронирование рабочих мест
					</Typo>

					<Separator style={{backgroundColor: 'white', marginTop: 24}}/>

					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<Typo type={TypographyType.h4} color={TypoColor.white}>
							Ранний доступ
						</Typo>

						<Typo
							block
							type={TypographyType.h4}
							color={TypoColor.white}
							style={{textDecoration: 'line-through'}}
						>
							5000 руб / мес
						</Typo>
					</div>

					<Typo
						color={TypoColor.white}
						block
						className="card__price-old"
						type={TypographyType.h3}
						textAlign={TypoTextAlign.end}
						style={{lineHeight: '24px', fontWeight: 500}}
					>
						3900 руб / мес
					</Typo>

					<PaymentButtons dark/>

				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;