import React, { useState } from 'react';
import CountryStatStore from '@Store/CountryStatStore';
import { observer } from 'mobx-react-lite';
import useAsync from '@utils/useAsync';

export interface CountryStatProps {
    dayNumber: number
}

const CountryStat : React.FC = () => {
    const [store] = useState(new CountryStatStore());
    useAsync(store.fetch, []);

    return (
      <div className="sidebar-countries">
        <p>keke</p>
      </div>
    );
};

export default observer(CountryStat);
