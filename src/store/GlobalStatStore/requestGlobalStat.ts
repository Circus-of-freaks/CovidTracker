import axios from 'axios';
import apiUrls from '@Config/apiUrls';
import { normalizeGlobalStatApi } from '@Models/GlobalStat/GlobalStatApi';
import type { GlobalStatApi } from '@Models/GlobalStat/GlobalStatApi';
import ApiResponse from '@utils/apiTypes';
import log from '@utils/log';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const requestGlobalStat = async (): Promise<ApiResponse<GlobalStatApi>> => {
    try {
        const response = await axios(apiUrls.global());
        return <ApiResponse>{
            isError: false,
            data: normalizeGlobalStatApi(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: e,
        };
    }
};

export default requestGlobalStat;
