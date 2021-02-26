import React from 'react';
import { match } from 'react-router';
import countriesJson from '@utils/countries.json';
import CountryStore from '@Store/CountryStore/CountryStore';
import CountryStoreContext from '@components/CountryStoreContext';
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
    const countryStore = new CountryStore(countries[router.params.code].country);

    return (
        <CountryStoreContext.Provider value={countryStore}>
            <div className={styles.page}>
                <h2 className={styles.country__tittle}>{countries[router.params.code].country}</h2>
                <Stat />
                <Plot />
            </div>
        </CountryStoreContext.Provider>
    );
};

export default CountryPage;
