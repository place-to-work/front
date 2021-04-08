import {Message, MessTheme} from '@models/Message/Message';
import {MessQueue} from '@models/Message/MessQueue';

class MessBucket {
	queues: Record<string, MessQueue> = {};

	add(message: Message, theme: MessTheme) {
		if (!this.queues[theme]) {
			this.queues[theme] = new MessQueue();
		}

		this.queues[theme].add(message);
	}

	getMessages(theme: MessTheme) {
		if (!this.queues[theme]) {
			this.queues[theme] = new MessQueue();
		}

		return this.queues[theme];
	}
}

export default new MessBucket();