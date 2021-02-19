import {
    action, computed, makeObservable, observable, runInAction,
} from 'mobx';
import Meta from '@utils/meta';
import log from '@utils/log';
import { GlobalStatModel } from '@Models/GlobalStat/GlobalStatModel';
import requestGlobalStat from '@Store/GlobalStatStore/requestGlobalStat';

class GlobalStatStore {
    _date = <GlobalStatModel>{};

    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _date: observable,
            meta: observable,
            fetch: action.bound,
            data: computed,
        });
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._date = <GlobalStatModel>{};

        const { isError, data } = await requestGlobalStat();
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._date = data;
        });
    }

    get data():GlobalStatModel {
        log('Get data error: ', this._date);

        return this._date;
    }
}

export default GlobalStatStore;
