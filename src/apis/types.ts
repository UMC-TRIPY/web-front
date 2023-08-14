export interface MaterialReturnType {
    materials_index: number;
    materials_name: string;
}

export interface TokenReturnType {
    success: boolean;
    uid: number;
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
