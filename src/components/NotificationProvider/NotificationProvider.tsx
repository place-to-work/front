import NotifBucket from '@models/Notification/NotifBucket';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {NotificationComponent} from '@components/NotificationProvider/NotificationComponent';

const NotificationProvider: React.FC = ({children}) => (
	<div style={{height: '100%'}}>
		{NotifBucket.getSortedNotifs().map((m, idx) => (
			m ? <NotificationComponent key={m.id} notification={m} idx={idx}/> : null
		))}
		{children}
	</div>
);

export default observer(NotificationProvider);