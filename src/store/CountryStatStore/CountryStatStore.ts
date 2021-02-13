import { CountryStatModel } from '@Models/CountryStatModel';
import initCountries from '@utils/initCountries';
import { makeObservable, observable } from 'mobx';

export default class CountryStatStore {
  data: CountryStatModel[] = initCountries.map((item) => ({ name: item, additional: 0, total: 0 }));

  constructor() {
      makeObservable(this, {
          data: observable,
      });
  }
}
