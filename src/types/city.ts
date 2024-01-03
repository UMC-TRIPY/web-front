export interface ICityProps {
    country: string;
    cityKo: string;
    cityEn: string;
    mainPhoto: string;
}

export interface ICurrencyProps {
    currencyKo: string;
    currencyEn: string;
}

export interface ICityInformationProps {
    city: ICityProps;
    currencyType: ICurrencyProps | undefined;
    currency: number;
}
