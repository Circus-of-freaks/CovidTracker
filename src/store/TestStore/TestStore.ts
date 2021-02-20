import { makeObservable, observable } from 'mobx';

export default class TestStore {
  value = 0;

  constructor() {
      makeObservable(this, {
          value: observable,
      });
  }
}
