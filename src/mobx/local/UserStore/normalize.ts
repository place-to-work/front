import {UserApiType} from './apiTypes';
import {UserCategory, UserType} from './types';

const normalizeUserCategory = (category: number): UserCategory => {
	switch (category){
	case 1:
		return UserCategory.client;
	case 2:
		return UserCategory.staff;
	default:
		return UserCategory.client;
	}
};

// function getHasSubscribe(date: Date) {
// 	const today = new Date();
// 	console.log(date, today );
//
// 	return date > today;
// }

export const normalizeUserData = (data: UserApiType): UserType =>{
	console.log('NORMALIZEEEE', data.is_subscribed);
	return {
		id: data.id,
		email: data.email,
		name: data.name,
		avatar: data.avatar,
		place: data.place,
		type: normalizeUserCategory(data.user_type),
		joinDate: new Date(data.date_joined),
		subscribeDate: new Date(data.subscribed_until),
		hasSubscribe: data.is_subscribed,
	};
};