export default interface IscheduleItem {
    id: number;
    column: number;
    lineColor: string;
    color: string;
    startTime: number;
    halfHour: number;
    // endTime: Date;
    title: string;
    location?: string;
}
