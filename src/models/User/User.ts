import {UserApiType, UserInnerType} from '@models/User/types';
import {makeAutoObservable} from 'mobx';
import {LoginValues} from '@pages/LoginPage/LoginPage';
import Http from '@network/Http/Http';
import {SignupValues} from '@pages/SignupPage/SignupPage';

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

	async login(values: LoginValues): Promise<void> {
		const data = await Http.fetchPost({
			path: '/users/login/',
			body: JSON.stringify(values),
		}).then((resp) => resp.json());

		if (data) this.init(data);
	}

	async register(values: SignupValues): Promise<void> {
		const data = await Http.fetchPost({
			path: '/users/',
			body: JSON.stringify(values),
		}).then((resp) => resp.json());

		if (data) this.init(data);
	}

	async fetch(): Promise<User | null> {
		const data = await Http.getCurrentUser();
		console.log(`fetch = \n${JSON.stringify(data, null, 4)}`);
		if (data) this.init(data);
		console.log(`fetch after init = \n${JSON.stringify(this, null, 4)}`);
		return this.id === -1 ? null : this;
	}

	init(netUser: UserApiType) {
		Object.assign(this, netUser);
	}
}

export default new User;