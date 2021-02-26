import Meta from '@utils/meta';
import {computed, makeObservable, observable, action} from 'mobx';
import {CountryStat} from '@Models/GlobalStat/GlobalStatModel';

export default class SearchStore {
    _data: string[] = [];
    iso: Record<string, string> = {};
    filteredData: string[] = [];
    input: string | undefined = '';
    meta: Meta = Meta.Initial;
    
    constructor(another: Record<string, CountryStat>) {
        makeObservable(this, {
            _data: observable,
            meta: observable,
            setData: action.bound,
            data: computed,
            input: observable,
            filteredData: observable
        });

        this.setData(another);
    }

    setData(countries: Record<string, CountryStat>) {
        const temp: string[] = [];
        for (const key in countries) {
            this.iso[countries[key].country] = key;
            temp.push(countries[key].country);
        }

        this._data = temp;
    }

    updateInput(s: string | undefined) {
        return this.input = s;
    }

    get data(): string[] {
        return this._data;
    }
}