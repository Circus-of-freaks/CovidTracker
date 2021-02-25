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
        if (result[item.Date]) {
            result[item.Date].active += item.Active;
            result[item.Date].confirmed += item.Confirmed;
            result[item.Date].deaths += item.Deaths;
            result[item.Date].recovered += item.Recovered;
            return;
        }
        result[item.Date] = {
            active: item.Active,
            confirmed: item.Confirmed,
            deaths: item.Deaths,
            recovered: item.Recovered,
            date: item.Date,
        };
    });

    return result;
};
