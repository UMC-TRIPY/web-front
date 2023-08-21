export interface IBagReturnType {
    bag_name: string;
    departureDate: string;
    arrivalDate: string;
    stay_duration: string;
}

export interface IBagAndMaterialReturnType {
    bag_name: string;
    materials_name: string;
}

export interface ICityMaterialReturnType {
    materials_name: string;
}

export interface IPlanBagListReturntype {
    bag_index: number;
    user_index: number;
    bag_name: string;
}
