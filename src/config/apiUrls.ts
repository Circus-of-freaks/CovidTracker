import caseStatus from '@utils/caseStatus';
import { DateToISO, getNextISO } from '@utils/dateDays';
import PREV_DAY from '@Config/consts';

const covidApi = (endpoint: string): string => `https://api.covid19api.com/${endpoint}`;

function totalByCountryApi(
    country: string,
    time: Date,
    status: string,
) : string {
    return covidApi(`total/country/${country}/status/${status}?from=${getNextISO(time, PREV_DAY)}&to=${DateToISO(time)}`);
}

const apiUrls = {
    country: {
        lastTwo: (
            country: string,
            time: Date,
        ): string => covidApi(`country/${country}?from=${getNextISO(time, PREV_DAY)}&to=${DateToISO(time)}`),
    },
    total: {
        byCountry: {
            ByCountryConfirmed: (
                country: string,
                time: Date,
            ): string => totalByCountryApi(country, time, caseStatus.confirmed),
            ByCountryRecovered: (
                country: string,
                time: Date,
            ): string => totalByCountryApi(country, time, caseStatus.recovered),
            ByCountryDeaths: (
                country: string,
                time: Date,
            ): string => totalByCountryApi(country, time, caseStatus.deaths),
        },
    },
    global: (): string => covidApi('summary'),
};

export default apiUrls;
