import React, {useContext} from 'react';
import StatCard from '@components/StatCard';
import './Stat.css';
import CountryStoreContext from '@Store/CountryStore/CountryStoreContext';
import {observer} from 'mobx-react-lite';

export type StatProps = {
    totalConfirmed: number;
    totalActive: number;
    totalDeaths: number;
    totalRecovered: number;
}

function Stat() {
    const store = useContext(CountryStoreContext);
    const { todayDate} = store;

    return (
      <div className="stat">
        <StatCard title="Infected" number={todayDate?.confirmed}/>
        <StatCard title="Active" number={todayDate?.active}/>
        <StatCard title="Died" number={todayDate?.deaths}/>
        <StatCard title="Recovered" number={todayDate?.recovered}/>
      </div>
    );
}

export default observer(Stat);
