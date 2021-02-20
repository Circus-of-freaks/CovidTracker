import axios from 'axios';

import apiUrls from '@Config/apiUrls';
import normaliseCountryStatApiModel from '@Models/CountryStatApi';
import { CountryStatModel } from '@Models/CountryStatModel';
import ApiResponse from '@utils/apiTypes';
import log from '@utils/log';

const requestCountryStat = async (
    country: string,
): Promise<ApiResponse<CountryStatModel>> => {
    try {
        const response = await axios(apiUrls.country.lastTwo(country, new Date()));
        return {
            isError: false,
            data: response.data.map((item: any) => normaliseCountryStatApiModel(item)),
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
