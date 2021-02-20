import { CountryStatModel } from '@Models/CountryStatModel';

const normaliseCountryStatApiModel = (
    raw: CountryStatModel,
): CountryStatModel => ({
    Country: raw.Country,
    Date: raw.Date,
    Confirmed: raw.Confirmed,
    Recovered: raw.Recovered,
    Deaths: raw.Deaths,
});

export default normaliseCountryStatApiModel;
