import React, {useContext} from 'react';

import './Stat.css';
import StatCard from '@App/Home/Main/Stat/StatCard';
import GlobalStoreContext from '@components/GlobalStoreContext';
import {observer} from 'mobx-react-lite';

function Stat() {
    const store = useContext(GlobalStoreContext);
    return (
      <div className="stat">
        <StatCard title="Заражено" number={store.data.global?.totalConfirmed} newCases={store.data.global?.newConfirmed} />
        <StatCard title="Активно" number={store.data.global?.totalActive} newCases={store.data.global?.newActive} />
        <StatCard title="Умерло" number={store.data.global?.totalDeaths} newCases={store.data.global?.newDeaths} />
        <StatCard title="Вылечилось" number={store.data.global?.totalRecovered} newCases={store.data.global?.newRecovered} />
      </div>
    );
}

export default observer(Stat);
