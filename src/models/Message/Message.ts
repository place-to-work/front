import MessBucket from '@models/Message/MessBucket';

enum MessType {
	error,
	info,
	warning,
}

export enum MessTheme {
	info,
	error,
}

export class Message {
	constructor(
		public message: string,
		public type: MessType,
	) {
	}
}

function addMess(message: string, type: MessType, theme: MessTheme) {
	const instance = new Message(message, type);
	MessBucket.add(instance, theme);
}

function info(theme: MessTheme, message: string): void {
	addMess(message, MessType.info, theme);
}

function error(theme: MessTheme, message: string): void {
	addMess(message, MessType.error, theme);
}

function warning(theme: MessTheme, message: string): void {
	addMess(message, MessType.warning, theme);
}

export default {info, error, warning};