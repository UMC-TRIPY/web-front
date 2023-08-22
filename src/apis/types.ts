export interface MaterialReturnType {
    materials_index: number;
    materials_name: string;
    check_box: boolean;
}

export interface TokenReturnType {
    success: boolean;
    user: {
        user_index: number;
        newUser: boolean;
        email: string;
        nickname: string;
        profileImg: string;
    };
    access_token: string;
    refresh_token: string;
}

export interface RefreshReturnType {
    success: boolean;
    access_token: string;
    refresh_token: string;
}

export interface LogoutReturnType {
    message: string;
}
