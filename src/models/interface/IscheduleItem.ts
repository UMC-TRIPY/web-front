export default interface IscheduleItem {
    id: number;
    lineColor: string;
    color: string;
    startTime: Date;
    endTime: Date;
    title: string;
    location?: string;
}
