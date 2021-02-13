import { CountryStatModel } from '@Models/CountryStatModel';

type CountryStatApiModel = {
  Country: string,
  Cases: number,
  Date: string
}

const normalizeCountryStatApiModel = (
    raw: CountryStatApiModel,
): CountryStatModel => ({
    сountry: raw.Country,
    cases: raw.Cases,
    date: raw.Date,
});

export default normalizeCountryStatApiModel;
