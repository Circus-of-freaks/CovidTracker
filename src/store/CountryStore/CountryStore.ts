import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from 'mobx';
import { CountryInfo, CountryModel } from '@Models/Country/CountryModel';
import Meta from '@utils/meta';
import requestCountry from '@Store/CountryStore/requestCountry';

export default class CountryStore {
    _data = {} as CountryModel;
    meta: Meta = Meta.Initial;
    countryName: string;

    constructor(countryName: string) {
        this.countryName = countryName;
        makeObservable(this, {
            _data: observable,
            meta: observable,
            fetch: action.bound,
            todayDate: computed,
            date: computed,
            dateArray: computed,
            data: computed,
        });
        this.fetch();
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.Loading || this.meta === Meta.Success) {
            return;
        }

        this.meta = Meta.Loading;
        this._data = <CountryModel>{};

        const { isError, data } = await requestCountry(this.countryName);
        if (isError) {
            this.meta = Meta.Error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.Success;
            this._data = data;
        });
    }

    get data(): CountryModel {
        return this._data;
    }

    get dateArray(): string[] {
        return Object.keys(this.data);
    }

    get date() {
        const dat = this.dateArray;
        return dat[this.dateArray.length - 1];
    }

    get todayDate(): CountryInfo {
        return this.data[this.date];
    }
}