import React, {FC} from 'react';
import Collapse from '@components/primitives/Collapse';
import './BottomBar.scss';
import SubscriptionMain from '@pages/SubscriptionMain/SubscriptionMain';
import cn from 'classnames';
import {observer} from 'mobx-react-lite';
import User from '@models/User';


const BottomBar:FC = ()=>{

	const [showBlock, setShowBlock] = React.useState<boolean | null>(null);


	React.useEffect(() => {
		if(!User.isSubscribed){
			setShowBlock(true);
		} else {
			setShowBlock(false);
		}
	},[User.isSubscribed, User.id]);

	return showBlock === null ? null :<div className={`container ${showBlock && 'container_opened' }`}>
		<Collapse className="bottom-bar" opened={showBlock}>
			<div className={cn('bottom-bar__content')}>
				<span>{User.isSubscribed}</span>
				<span>{User.isSubscribed}</span>
				{<SubscriptionMain/>}
			</div>

		</Collapse>
	</div>;
};
export default observer(BottomBar);