import {Message} from '@models/Message/Message';

export class MessQueue {
	messages: Message[];

	add(message: Message) {
		this.messages.push(message);
	}
}