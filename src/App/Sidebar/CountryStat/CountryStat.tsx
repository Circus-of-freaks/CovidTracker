import React from 'react';
import { useLocal } from '@utils/useLocal';
import CountryStatStore from '@Store/CountryStatStore/CountryStatStore';
import { observer } from 'mobx-react-lite';
import useAsync from '@utils/useAsync';

export interface CountryStatProps {
    dayNumber: number
}

const CountryStat : React.FC = () => {
    const store = useLocal(() => new CountryStatStore());
    useAsync(store.fetch, []);
    // eslint-disable-next-line no-unused-expressions
    console.log(store.data);
    return (
      <div className="sidebar-countries">
        <p>keke</p>
      </div>
    );
};

export default observer(CountryStat);
