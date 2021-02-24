import React from 'react';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import {observer} from 'mobx-react-lite';

export interface CountryStatProps {
    globalStatStore: GlobalStatStore
}

const CountryStat = () => {
    return (
      <div className="sidebar-countries">
          kek
      </div>
    );
};

export default observer(CountryStat);
