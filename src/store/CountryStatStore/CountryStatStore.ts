import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from 'mobx';

import { CountryStatModel } from '@Models/CountryStatModel';
import requestCountryStat from '@Store/CountryStatStore/requestCountryStat';
import log from '@utils/log';
import Meta from '@utils/meta';

export default class CountryStatStore {
  _data: CountryStatModel[] | undefined;

  meta: Meta = Meta.Initial;

  constructor() {
      makeObservable(this, {
          _data: observable,
          meta: observable,
          fetch: action.bound,
          data: computed,
      });
  }

  async fetch(): Promise<void> {
      if (this.meta === Meta.Loading || this.meta === Meta.Success) {
          return;
      }

      this.meta = Meta.Loading;
      this._data = [];

      const { isError, data } = await requestCountryStat('russia');
      runInAction(() => {
          if (isError) {
              this.meta = Meta.Error;
              return;
          }

          this.meta = Meta.Success;
          this._data = data;
      });
  }

  get data() {
      log('get data', this._data);
      return this._data;
  }
}
