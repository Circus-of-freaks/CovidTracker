const date = new Date();

const daysInYear = {
    0: 31, // Январь
    1: date.getFullYear() % 4 === 0 ? 29 : 28, // Февраль
    2: 31, // Март
    3: 30, // Апрель
    4: 31, // Май
    5: 30, // Июнь
    6: 31, // Июль
    7: 31, // Август
    8: 30, // Сентябрь
    9: 31, // Октябрь
    10: 30, // Ноябрь
    11: 31, // Декабрь
};

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
    daysInYear,
    days,
    setNextDay,
    DateToISO,
    getNextISO,
};
