import NotifBucket from '@models/Notification/NotifBucket';

const LIVE_TIME = 2000;
const APPEAR_TIME = 300;
const TOTAL_DELAY = LIVE_TIME + 2 * APPEAR_TIME;

enum NotifType {
	error,
	info,
	warning,
}

class Notification {
	id = new Date().getTime();
	constructor(public message: string, public type: NotifType) {
	}
}

function addMessage(message: string, type: NotifType) {
	const messageInstance = new Notification(message, type);
	NotifBucket.add(messageInstance);
	setTimeout(() => NotifBucket.remove(messageInstance), TOTAL_DELAY);
}

function info(message: string): void {
	addMessage(message, NotifType.info);
}

function error(message: string): void {
	addMessage(message, NotifType.error);
}

function warning(message: string): void {
	addMessage(message, NotifType.warning);
}

export {Notification};
export default {info, error, warning};