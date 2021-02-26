import React, {useContext} from 'react';
import StatCard from '@components/StatCard';
import './Stat.css';
import GlobalStoreContext from '@Store/GlobalStatStore/GlobalStoreContext';
import {observer} from 'mobx-react-lite';

export type StatProps = {
    totalConfirmed: number;
    totalActive: number;
    totalDeaths: number;
    totalRecovered: number;
    newConfirmed: number;
    newActive: number;
    newDeaths: number;
    newRecovered: number;
}

function Stat() {
    const store = useContext(GlobalStoreContext);
    const globalData = store.data.global || {};

    return (
      <div className="stat">
        <StatCard title="Infected" number={globalData?.totalConfirmed} newCases={globalData?.newConfirmed} />
        <StatCard title="Active" number={globalData?.totalActive} newCases={globalData?.newActive} />
        <StatCard title="Died" number={globalData?.totalDeaths} newCases={globalData?.newDeaths} />
        <StatCard title="Recovered" number={globalData?.totalRecovered} newCases={globalData?.newRecovered} />
      </div>
    );
}

export default observer(Stat);
