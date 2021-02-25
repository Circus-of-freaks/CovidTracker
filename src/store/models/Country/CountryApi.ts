import {CountryModel} from '@Models/Country/CountryModel';

export type countryApi = {
    ID: string,
    Country: string,
    CountryCode: string,
    Province: string,
    City: string,
    CityCode: string,
    Lat: string,
    Lon: string,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number,
    Date: string
}

export const normalizeCountryApi = (raw: countryApi[]) : CountryModel => {
    const result = <CountryModel>{};
    raw.map((item) => {
        result[item.Date] = {
            Active: item.Active,
            Confirmed: item.Confirmed,
            Deaths: item.Deaths,
            Recovered: item.Recovered
        };
    });

    return result;
};