import React, {FC, useState} from 'react';
import Collapse from '@components/primitives/Collapse';
import './BottomBar.scss';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import SubscriptionMain from '@pages/SubscriptionMain/SubscriptionMain';
import cn from 'classnames';
import {observer} from 'mobx-react-lite';
import User from '@models/User';
import {isWaitingForPay} from '@utils/payStorage';
import t, {Phrase} from '@models/Translate/Translate';


const BottomBar:FC = ()=>{

	const [showBlock, setShowBlock] = React.useState<boolean | null>(null);


	React.useEffect(() => {
		// добавил задержку, чтобы модель пользователя
		// успела обновиться и не было мерцания всплывашки
		setTimeout(() => {
			if(!User.isSubscribed){
				setShowBlock(true);
			} else {
				setShowBlock(false);
			}
		}, 1000);
	},[User.isSubscribed, User.id]);

	const [full, setFull] = useState(false);

	const handleReBuild = React.useCallback(() => {
		setShowBlock(false);
		setTimeout(()=>{
			setFull(true);
			setTimeout(()=>{
				setShowBlock(true);
			},500);
		},500);
	},[]);


	const waitingForPay = isWaitingForPay() && !User.isSubscribed;

	return showBlock === null ? null :<div className={`container ${showBlock && 'container_opened' }`}>
		<Collapse className="bottom-bar" opened={showBlock}>
			<div className={cn('bottom-bar__content')}>
				<span>{User.isSubscribed}</span>
				<span>{User.isSubscribed}</span>
				{!full ? <>

					<Typo className="bottom-bar__title" textAlign={TypoTextAlign.center} type={TypographyType.h1}>
						{waitingForPay ? t(Phrase.waitingPayTitle) :
							<>Чтобы увидеть все заведения&nbsp;&mdash; оформите подписку</>}</Typo>
					{waitingForPay ? <Typo
						className="bottom-bar__subtitle"
						textAlign={TypoTextAlign.center}
						type={TypographyType.h3}
						weight={TypoWeight.regular}><Typo type={TypographyType.h3} weight={TypoWeight.regular}>Если у Вас возникли проблемы во время оплаты, напишите
							<Typo type={TypographyType.h3} weight={TypoWeight.regular} element="a" href = "mailto: ask@place-to-work.ru">&nbsp;Нам&nbsp;</Typo>.
							Если платеж не был завешен - вы можете перейти к оплате</Typo></Typo> :
						<Typo
							className="bottom-bar__subtitle"
							textAlign={TypoTextAlign.center}
							type={TypographyType.h3}
							weight={TypoWeight.regular}>
							Получайте бесплатный чай, скидки в&nbsp;кафе, неограниченный доступ в&nbsp;рабочие пространства и&nbsp;многое другое</Typo>
					}
					<Button buttonSize={ButtonSize.xl} className="bottom-bar__button" full color={ButtonColor.accent}
						onClick={handleReBuild}>
						{waitingForPay ? t(Phrase.aboutSubscribe) : t(Phrase.getSubscription) }
					</Button>
				</> :
					<SubscriptionMain/>
				}
			</div>

		</Collapse>
	</div>;
};
export default observer(BottomBar);