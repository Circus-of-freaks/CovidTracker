import { CountryStatModel } from '@Models/CountryStatModel';
import { CollectionT } from '@utils/collection';

type CountryStatApiModel = {
  Country: string,
  Cases: number,
  Date: string,
}

const normalizeCountryStatApiModel = (
    raw: CountryStatApiModel,
): CountryStatModel => ({
    country: raw.Country,
    cases: raw.Cases,
    date: raw.Date,
});

const normalizeCountryStatToCollection = (
    rawList: CountryStatApiModel[],
): CollectionT<number, CountryStatModel> => ({
    order: rawList.map((item, index) => index),
    entities: rawList.reduce(
        (acc, item, index) => ({
            ...acc,
            [index]: normalizeCountryStatApiModel(item),
        }),
        {},
    ),
});

export default normalizeCountryStatToCollection;
