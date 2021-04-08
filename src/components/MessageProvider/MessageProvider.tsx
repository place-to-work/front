import NotifBucket from '@models/Notification/NotifBucket';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {MessageComponent} from '@components/MessageProvider/MessageComponent';

const MessageProvider: React.FC = ({children}) => (
	<div style={{height: '100%'}}>
		{NotifBucket.getSortedNotifs().map((m, idx) => (
			m ? <MessageComponent key={m.id} message={m} idx={idx}/> : null
		))}
		{children}
	</div>
);

export default observer(MessageProvider);