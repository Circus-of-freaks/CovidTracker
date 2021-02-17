import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default-member
import apiUrls from '@Config/apiUrls';
import ApiResponse from '@utils/apiTypes';
import log from '@utils/log';
import { normalizeGlobalStatApi } from '@Models/GlobalStat/GlobalStatApi';
import type { GlobalStatApi } from '@Models/GlobalStat/GlobalStatApi';

const requestGlobalStat = async (): Promise<ApiResponse<GlobalStatApi>> => {
    try {
        const response = await axios(
            apiUrls.global(),
        );
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
