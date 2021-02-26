import React, {useContext} from 'react';
import StatCard from '@components/StatCard';
import './Stat.css';
import CountryStoreContext from '@components/CountryStoreContext';
import {observer} from 'mobx-react-lite';

export type StatProps = {
    totalConfirmed: number;
    totalActive: number;
    totalDeaths: number;
    totalRecovered: number;
}

function Stat() {
    const store = useContext(CountryStoreContext);
    const dateArray = Object.keys(store.data);
    const date = dateArray[dateArray.length - 1];
    return (
      <div className="stat">
        <StatCard title="Заражено" number={store.data[date]?.confirmed}/>
        <StatCard title="Активно" number={store.data[date]?.active}/>
        <StatCard title="Умерло" number={store.data[date]?.deaths}/>
        <StatCard title="Вылечилось" number={store.data[date]?.recovered}/>
      </div>
    );
}

export default observer(Stat);
