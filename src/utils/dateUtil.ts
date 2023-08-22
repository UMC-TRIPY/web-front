export const dateTotable = (date: Date): number => {
    let convertedNum = (date.getHours() - 6) * 2 + 1;
    if (date.getMinutes() === 30) {
        convertedNum += 1;
    }
    return convertedNum;
};

export const tableToDate = (num: number): Date => {
    const date = new Date();
    // console.log(num);
    date.setHours(6 + Math.floor(num / 2));
    if (num % 2 === 1) {
        date.setMinutes(30);
    } else {
        date.setMinutes(0);
    }
    return date;
};

export const compareDate = (startDate: Date, endDate: Date): number => {
    const minutes =
        endDate.getHours() * 60 +
        endDate.getMinutes() -
        (startDate.getHours() * 60 + endDate.getMinutes());
    return minutes / 30;
};

export const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};
