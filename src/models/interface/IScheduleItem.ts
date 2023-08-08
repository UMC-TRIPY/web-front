export default interface IScheduleItem {
    id: number;
    column: number;
    lineColor: string;
    color: string;
    startTime: number;
    halfHour: number;
    title: string;
    location?: string;
}
