import axios from 'axios';
import ApiResponse from '@utils/apiTypes';
import {CountryInfo} from '@Models/Country/CountryModel';
import apiUrls from '@Config/apiUrls';
import {normalizeCountryApi} from '@Models/Country/CountryApi';

const requestCountry = async (countryName: string): Promise<ApiResponse<CountryInfo>> => {
    try {
        const response = await axios(apiUrls.country.afterDate(countryName));
        const data = normalizeCountryApi(response.data);
        console.log('DATA :L ',data);
        return <ApiResponse>{
            isError: false,
            data: data,
        };
    } catch (e) {
        return {
            isError: true,
            data: e,
        };
    }
};

export default requestCountry;
