const days: string[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const setNextDay = (d: Date, n: number): Date => {
    const temp: Date = new Date(d);
    const curDate: number = temp.setDate(temp.getDate() + n);
    const nextDate: Date = new Date(curDate);
    nextDate.setHours(0, 0, 0, 0);
    return nextDate;
};
const DateToISO = (d: Date): string => {
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
};
const getNextISO = (d: Date, n: number): string => DateToISO(setNextDay(d, n));

export {
    days, setNextDay, DateToISO, getNextISO,
};
