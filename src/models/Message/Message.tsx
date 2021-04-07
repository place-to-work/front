import {makeAutoObservable} from 'mobx';

enum MessageType {
	error,
	info,
	warning,
}

class Message {
	id = new Date().getTime();
	constructor(public message: string, public type: MessageType) {
	}
}

class MessageBucket {
	constructor() {
		makeAutoObservable(this);
	}

	messages: Record<number, Message> = {};

	add(message: Message) {
		this.messages[message.id] = message;
	}

	remove(message: Message) {
		delete this.messages[message.id];
	}

	getSortedMessages(): Message[] {
		const result: Message[] = [];
		for (const message of Object.values(this.messages)) {
			result.push(message);
		}
		result.sort();
		console.log(`sorted messages = ${JSON.stringify(result)}`);
		return result;
	}
}

const bucketInstance = new MessageBucket();

function addMessage(message: string, type: MessageType) {
	const liveTime = 2600;
	const messageInstance = new Message(message, type);
	bucketInstance.add(messageInstance);
	setTimeout(() => bucketInstance.remove(messageInstance), liveTime);
}

function info(message: string): void {
	addMessage(message, MessageType.info);
}

function error(message: string): void {
	addMessage(message, MessageType.error);
}

function warning(message: string): void {
	addMessage(message, MessageType.warning);
}

export {bucketInstance as MessageBucket, Message};
export default {info, error, warning};