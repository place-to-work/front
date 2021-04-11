import {Notification} from './Notification';

export class NotifBucket {
	add(message: Notification);
	remove(message: Notification);
	getSortedNotifs(): Notification[]
}