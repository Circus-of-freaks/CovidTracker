import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from 'mobx';

import { GlobalStatModel } from '@Models/GlobalStat/GlobalStatModel';
import requestGlobalStat from '@Store/GlobalStatStore/requestGlobalStat';
import log from '@utils/log';
import Meta from '@utils/meta';

export default class GlobalStatStore {
  _date = <GlobalStatModel>{};

  meta: Meta = Meta.Initial;

  constructor() {
      makeObservable(this, {
          _date: observable,
          meta: observable,
          fetch: action.bound,
          data: computed,
      });

      this.fetch();
  }

  async fetch(): Promise<void> {
      if (this.meta === Meta.Loading || this.meta === Meta.Success) {
          return;
      }

      this.meta = Meta.Loading;
      this._date = <GlobalStatModel>{};

      const { isError, data } = await requestGlobalStat();
      if (isError) {
          this.meta = Meta.Error;
          return;
      }

      runInAction(() => {
          this.meta = Meta.Success;
          this._date = data;
      });
  }

  get data(): GlobalStatModel {
      log('Get data error: ', this._date.countries);

      return this._date;
  }
}
