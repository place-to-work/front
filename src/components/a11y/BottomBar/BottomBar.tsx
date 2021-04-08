import React, {FC, useState} from 'react';
import Collapse from '@components/primitives/Collapse';
import './BottomBar.scss';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import SubscriptionMain from '@pages/SubscriptionMain/SubscriptionMain';
import cn from 'classnames';
import {observer} from 'mobx-react-lite';
import User from '@models/User';



const BottomBar:FC = ()=>{

	const [showBlock, setShowBlock] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		// добавил задержку, чтобы модель пользователя
		// успела обновиться и не было мерцания всплывашки
		setTimeout(() => {
			if(User.isSubscribed === false){
				setShowBlock(true);
			} else {
				setShowBlock(false);
			}
		}, 1000);
	},[User.isSubscribed, User.id]);

	const [full, setFull] = useState(false);

	const handleReBuild = React.useCallback(() => {
		setShowBlock(false);
		console.log('set show block false');
		// setFull(true)
		// setOpened(true)
		setTimeout(()=>{
			setFull(true);
			console.log('set full true');
			setTimeout(()=>{
				setShowBlock(true);
				console.log('set show block true');
			},1000);
		},1000);
	},[]);

	return showBlock === null ? null :<div className={`container ${showBlock && 'container_opened' }`}>
		<Collapse className="bottom-bar" opened={showBlock}>
			<div className={cn('bottom-bar__content')}>
				<span>{User.isSubscribed}</span>
				<span>{User.isSubscribed}</span>
				{!full ? <>
					<Typo className="bottom-bar__title" textAlign={TypoTextAlign.center} type={TypographyType.h1}>Чтобы
                            увидеть все заведения&nbsp;&mdash; оформите подписку</Typo>
					<Typo className="bottom-bar__subtitle" textAlign={TypoTextAlign.center} type={TypographyType.h3}
						weight={TypoWeight.regular}>Получайте бесплатный чай, скидки в&nbsp;кафе, неограниченный
                            доступ в&nbsp;рабочие пространства и&nbsp;многое другое</Typo>
					<Button buttonSize={ButtonSize.xl} className="bottom-bar__button" full color={ButtonColor.accent}
						onClick={handleReBuild}>Оформить подписку</Button>
				</> :
					<SubscriptionMain/>
				}
			</div>

		</Collapse>
	</div>;
};
export default observer(BottomBar);