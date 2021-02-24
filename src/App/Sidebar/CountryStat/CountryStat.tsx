import React, { useContext } from 'react';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import {observer} from 'mobx-react-lite';
import Context from '../../../components/Context';

export interface CountryStatProps {
    globalStatStore: GlobalStatStore
}

const CountryStat = () => {
    const globalStore = useContext(Context);
    console.log(globalStore._date.top);
    return (
      <div className="sidebar-countries">
          kek
      </div>
    );
};

export default observer(CountryStat);
