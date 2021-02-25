import PREV_DAY from '@utils/consts';
import { DateToISO, getNextISO } from '@utils/dateDays';

const covidApi = (endpoint: string): string => `https://api.covid19api.com/${endpoint}`;

const apiUrls = {
    country: {
        lastTwo: (country: string, time: Date): string => covidApi(
            `country/${country}?from=${getNextISO(time, PREV_DAY)}&to=${DateToISO(
                time,
            )}`,
        ),
        afterDate: (country: string): string => `https://api.covid19api.com/country/${country}?
        from=2021-01-01T13:13:30Z&to=${new Date(Date.now()).toISOString()}`
    },
    global: (): string => covidApi('summary'),
};

export default apiUrls;
