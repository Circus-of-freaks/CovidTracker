import { CountryStatModel } from '@Models/CountryStatModel';
import {
    action, computed, makeObservable, observable, runInAction,
} from 'mobx';
import Meta from '@utils/meta';
import requestCountryStat from '@Store/CountryStatStore/requestCountryStat';
import log from '@utils/log';

export default class CountryStatStore {
    _data: CountryStatModel[] | undefined;

    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _data: observable,
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
        this._data = [];

        const { isError, data } = await requestCountryStat('russia');
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._data = data;
        });
    }

    get data() {
        log('get data', this._data);
        return this._data;
    }
}
