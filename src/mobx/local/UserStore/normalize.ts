import {UserApiType} from "./apiTypes";
import {UserCategory, UserType} from "./types";

const normalizeUserCategory = (category: number): UserCategory => {
    switch (category){
        case 1:
            return UserCategory.client;
        case 2:
            return UserCategory.staff;
        default:
            return UserCategory.client
    }
}

export const normalizeUserData = (data: UserApiType): UserType =>{
    return {
        id: data.id,
        email: data.email,
        name: data.name,
        avatar: data.avatar,
        place: data.place,
        type: normalizeUserCategory(data.user_type),
        joinDate: new Date(data.date_joined),
        subscribeDate: new Date(data.subscribed_until)
    }
}