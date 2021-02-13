import { CountryStatModel } from '@Models/CountryStatModel';
import {
    action, computed, makeObservable, observable, runInAction,
} from 'mobx';
import Meta from '@utils/meta';
import requestCountryStat from '@Store/CountryStatStore/requestCountryStat';
import { CollectionT } from '@utils/collection';
import log from '@utils/log';

export default class CountryStatStore {
_date: CollectionT<number, CountryStatModel> = {
    order: [],
    entities: {},
};

  meta: Meta = Meta.initial;

  constructor() {
      makeObservable(this, {
          _date: observable,
          meta: observable,
          fetch: action.bound,
          data: computed,
      });
  }

  async fetch(): Promise<null> {
      if (this.meta === Meta.loading || this.meta === Meta.success) {
          return null;
      }

      this.meta = Meta.loading;
      this._date = {
          order: [],
          entities: {},
      };

      const { isError, data } = await requestCountryStat('russia');
      if (isError) {
          this.meta = Meta.error;
          return null;
      }

      runInAction(() => {
          this.meta = Meta.success;
          this._date = data;
      });

      return null;
  }

  get data(): CountryStatModel[] {
      log('get data', this._date);

      return this._date.order.map((id) => this._date.entities[id]);
  }
}
