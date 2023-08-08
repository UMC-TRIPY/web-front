export default interface IScheduleItem {
    id: number | string;
    column: number;
    lineColor: string;
    color: string;
    startTime: number;
    halfHour: number;
    title: string;
    location?: string;
}
