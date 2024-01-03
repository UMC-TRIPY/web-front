export interface IDateProps {
    startDate: Date | null;
    endDate: Date | null;
}

export interface ICalendarProps extends IDateProps {
    claName: string;
    isOpen: boolean;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
