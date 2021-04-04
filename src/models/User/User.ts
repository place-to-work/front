

export enum UserType {
	user = 1,
	barista
}

class User {

	id: number = -1;

	email: string;

	name: string;

	date_joined: string;

	get isLogined() {
		return this.id >= 0;
	}

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