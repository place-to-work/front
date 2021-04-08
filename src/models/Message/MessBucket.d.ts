import {Message, MessTheme} from './Message';

class MessBucket {
	add(message: Message, theme: MessTheme);
	getMessages(theme: MessTheme);
}