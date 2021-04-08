import {makeAutoObservable} from 'mobx';
import {Notification} from '@models/Notification/Notification';

class NotifBucket {
	constructor() {
		makeAutoObservable(this);
	}

	messages: Record<number, Notification> = {};

	add(message: Notification) {
		this.messages[message.id] = message;
	}

	remove(message: Notification) {
		delete this.messages[message.id];
	}

	getSortedNotifs(): Notification[] {
		const result: Notification[] = [];
		for (const message of Object.values(this.messages)) {
			result.push(message);
		}
		result.sort();
		console.log(`sorted messages = ${JSON.stringify(result)}`);
		return result;
	}
}

export default new NotifBucket();