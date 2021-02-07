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

const days: String[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export {
    daysInYear,
    days,
};
