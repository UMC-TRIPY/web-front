export interface Friend {
    user_index: number;
    nickname: string;
    profileImg: string;
}

export interface IUser {
    nickname: string;
    email: string;
    nationality: string;
    profileImg: string;
}

export interface ISchedule {
    city_name: string;
    departureDate: string;
    arrivalDate: string;
    plan_index: number;
}
