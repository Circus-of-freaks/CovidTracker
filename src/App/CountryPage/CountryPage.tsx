import React, { useState } from 'react';
import { match } from 'react-router';
import countriesJson from '@utils/countries.json';
import CountryStore from '@Store/CountryStore/CountryStore';
import CountryStoreContext from '@Store/CountryStore/CountryStoreContext';
import Stat from './Stat';
import Plot from './Plot';
import styles from './CountryPage.module.scss';


export interface CountryPageProps {
    router: match<any>,
}

type Countries = Record<string, {
    country: string,
}>

const CountryPage = ({router} : CountryPageProps) => {
    const countries = countriesJson as Countries;
    const countryCode = countries[router.params.code].country;
    const [countryStore] = useState(() => new CountryStore(countryCode));

    return (
        <CountryStoreContext.Provider value={countryStore}>
            <div className={styles.page}>
                <h2 className={styles.country__tittle}>{countryCode}</h2>
                <Stat />
                <Plot />
            </div>
        </CountryStoreContext.Provider>
    );
};

export default CountryPage;
