export interface FriendReturnType {
    data: {
        user_index: number;
        nickname: string;
        profileImg: string;
    }[];
}

export interface InformationReturnType {
    nickname: string;
    email: string;
    nationality: string;
    profileImg: string;
}

export interface IScheduleReturnType {
    city_name: string;
    departureDate: string;
    arrivalDate: string;
    plan_index: number;
}
