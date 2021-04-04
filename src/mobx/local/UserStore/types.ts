export enum UserCategory {
    client = 'client',
    staff = 'staff'
}
export type UserType = {
    id: number;
    email: string;
    name: string;
    avatar: string | null;
    place: number | null
    type: UserCategory;
    joinDate: Date;
    subscribeDate: Date;
    hasSubscribe: boolean | null;
};