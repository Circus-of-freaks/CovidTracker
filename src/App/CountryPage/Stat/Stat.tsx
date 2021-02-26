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
        <StatCard title="Заражено" number={todayDate?.confirmed}/>
        <StatCard title="Активно" number={todayDate?.active}/>
        <StatCard title="Умерло" number={todayDate?.deaths}/>
        <StatCard title="Вылечилось" number={todayDate?.recovered}/>
      </div>
    );
}

export default observer(Stat);
