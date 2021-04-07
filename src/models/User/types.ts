export interface UserApiType {
    id: number;
    email: string;
    name: string;
    avatar: string | null;
    place: number | null
    user_type: number;
    date_joined: string;
    subscribed_until: string;
    is_subscribed: boolean;
}

export interface UserInnerType {
    id: number;
    email: string;
    name: string;
    avatar: string | null;
    place: number | null
    userType: number;
    dateJoined: Date;
    subscribedUntil: Date;
    isSubscribed: boolean;
    isAuthenticated: boolean;
}