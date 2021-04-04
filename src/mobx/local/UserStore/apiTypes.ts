export type UserApiType = {
    id: number;
    email: string;
    name: string;
    avatar: string | null;
    place: number | null
    user_type: number;
    date_joined: string;
    subscribed_until: string;
    is_subscribed: boolean;
};