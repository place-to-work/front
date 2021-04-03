export enum UserType {
	user = 1,
	barista
}

class User {
	id: number;

	email: string;

	name: string;

	date_joined: string;
	get dateJoined(): Date {
		return new Date(this.date_joined);
	}

	avatar: string;

	subscribed_until: string
	get subscribedUntill(): Date {
		return new Date(this.subscribed_until);
	}

	user_type: UserType;
	get userType(): UserType {
		return this.user_type;
	}
}

export default User;