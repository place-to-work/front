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
				<SubscriptionMain/>
			</div>

		</Collapse>
	</div>;
};
export default observer(BottomBar);