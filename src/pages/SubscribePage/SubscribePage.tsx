import React from 'react';
import User from '@models/User';
import BasePage from '@pages/BasePage/BasePage';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import Typo, {TypographyType, TypoTextAlign, TypoWeight} from '@components/primitives/Typo';
import t, {Phrase} from '@models/Translate/Translate';
import QrCard from '@components/QrCard';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';


const SubscribePage: React.FC = () => {
	if (User.isSubscribed) {

	} else {
		return <BasePage
			mainProps={{
				body: () => <SubscriptionCard/>
			}}
		/>;
	}
}