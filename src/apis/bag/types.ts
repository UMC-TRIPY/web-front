export interface IBagReturnType {
    bag_index: number;
    bag_name: string;
    user_index: number;
    // departureDate: string;
    // arrivalDate: string;
    // stay_duration: string;
}

export interface IBagAndMaterialReturnType {
    bag_name: string;
    materials_name: string;
}

export interface ICityMaterialReturnType {
    materials_index: number;
    materials_name: string;
}

export interface IPlanBagListReturntype {
    bag_index: number;
    user_index: number;
    bag_name: string;
}
