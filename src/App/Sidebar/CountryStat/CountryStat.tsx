import React, { useContext } from 'react';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import { observer } from 'mobx-react-lite';
import Context from '../../../components/Context';
import Country from './Country/Country';
import styles from './CountryStat.module.scss';

export interface CountryStatProps {
    globalStatStore: GlobalStatStore
}

const CountryStat = () => {
    const globalStore = useContext(Context);

    const countriesArr = globalStore.data?.top?.topConfirmed.map((countryCode) => {
        const { totalConfirmed, newConfirmed, country } = globalStore.data?.countries[countryCode];
        const item = <Country
            countryName={country}
            additional={newConfirmed}
            total={totalConfirmed}
            countryCode={countryCode}
        />;
        return item;
    });

    return (
        <div className={styles.list}>
            {countriesArr}
        </div>
    );
};

export default observer(CountryStat);
