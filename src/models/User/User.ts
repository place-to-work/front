import {UserApiType, UserInnerType} from '@models/User/types';
import {makeAutoObservable} from 'mobx';
import {LoginValues} from '@pages/LoginPage/LoginPage';
import Http from '@network/Http/Http';
import {SignupValues} from '@pages/SignupPage/SignupPage';
import Message from '@models/Notification';
import t, {Phrase} from '@models/Translate';

export enum UserType {
	client = 1,
	staff,
}

class User implements UserInnerType{
	constructor() {
		makeAutoObservable(this);
	}

	id = -1;

	email: string;

	name: string;

	date_joined: string;

	get isAuthenticated() {
		return this.id >= 0;
	}

	get dateJoined(): Date {
		return new Date(this.date_joined);
	}

	avatar: string;

	subscribed_until: string
	get subscribedUntil(): Date {
		return new Date(this.subscribed_until);
	}

	user_type: UserType;
	get userType(): UserType {
		return this.user_type;
	}

	place: number | null;

	get isSubscribed(): boolean {
		return this.subscribedUntil > new Date();
	}

	async login(values: LoginValues): Promise<UserApiType | null> {
		return Http.login(values)
			.then((resp) => {
				if (resp === null) return null;
				console.log(`login ok = ${resp.ok}`);
				console.log(`login code = ${resp.status}`);
				if (!resp.ok) {
					console.log(`login is not ok = ${!resp.ok}`);
					Message.error(t(Phrase.badEmailOrPassword));
					return null;
				}
				return resp.json();
			});
	}

	async register(values: SignupValues): Promise<void | null> {
		return  Http.fetchPost({
			path: '/users/',
			body: JSON.stringify(values),
		})
			.then((resp) => {
				if (!resp.ok) {
					Message.error(t(Phrase.userExists));
					return null;
				}
				return void 0;
			});
	}

	async googleOAuth(values: any): Promise<void | null> {
		return  Http.fetchPost({
			path: '/oauth/convert-token',
			body: JSON.stringify(values),
		})
			.then((resp) => {
				if (!resp.ok) {
					Message.error('Ошибка авторизации.');
					return null;
				}
				console.log('response oauth', resp);
				return void 0;
			});
	}

	async fetch(): Promise<User | null> {
		const data = await Http.getCurrentUser()
			.catch(((reason) => {
				console.log(`user fetch catch: ${JSON.stringify(reason, null, 4)}`);
				Message.error(t(Phrase.networkError));
			}));
		if (data) this.selfInit(data);
		return this.id === -1 ? null : this;
	}

	selfInit(netUser: UserApiType): UserApiType {
		Object.assign(this, netUser);
		return netUser;
	}
}

export default new User;