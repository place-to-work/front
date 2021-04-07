import {MessageBucket} from '@models/Message';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {MessageComponent} from '@components/MessageProvider/MessageComponent';

const MessageProvider: React.FC = ({children}) => (
	<div style={{height: '100%'}}>
		{MessageBucket.getSortedMessages().map((m, idx) => (
			m ? <MessageComponent key={m.id} message={m} idx={idx}/> : null
		))}
		{children}
	</div>
);

export default observer(MessageProvider);