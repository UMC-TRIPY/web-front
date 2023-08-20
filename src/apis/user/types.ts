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