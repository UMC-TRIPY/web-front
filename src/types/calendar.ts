export interface IDateProps {
    startDate: Date | null;
    endDate: Date | null;
}

export interface IOpenStateProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICalendarProps extends IDateProps, IOpenStateProps {
    claName: string;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}
