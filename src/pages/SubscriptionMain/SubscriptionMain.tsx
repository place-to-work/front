import React from 'react';
import {observer} from 'mobx-react-lite';
import './SubscriptionMain.scss';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';
import t, {Phrase} from '@models/Translate';


const SubscriptionMainPage: React.FC = () => (<>
	<div className="subscription-page">
		<Typo className="subscription-page__title">
			<Typo
				block
				type={TypographyType.h1}
				textAlign={TypoTextAlign.center}
				className="subscription-page_title"
			>
				{t(Phrase.subscribeVerb)}
			</Typo>
			<Typo
				block
				type={TypographyType.h1}
				textAlign={TypoTextAlign.center}
				className="subscription-page_title"
			>
				{t(Phrase.subscribeNoun)}
			</Typo>
		</Typo>

		<SubscriptionCard/>
	</div>
</>
);


export default observer(SubscriptionMainPage);