import axios from 'axios';
import apiUrls from '@Config/apiUrls';
import ApiResponse from '@utils/apiTypes';
import { CountryStatModel } from '@Models/CountryStatModel';
import log from '@utils/log';
import normalizeCountryStatToCollection from '@Models/CountryStatApi';
import { CollectionT } from '@utils/collection';

const requestCountryStat = async (
    country: string,
): Promise<ApiResponse<CollectionT<number, CountryStatModel>>> => {
    try {
        const response = await axios(
            apiUrls
                .total
                .byCountry
                .ByCountryConfirmed(country, new Date()),
        );
        return {
            isError: false,
            data: normalizeCountryStatToCollection(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};

export default requestCountryStat;
