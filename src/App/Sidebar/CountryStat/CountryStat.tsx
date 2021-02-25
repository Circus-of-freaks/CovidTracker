import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import GlobalStoreContext from '@components/GlobalStoreContext';
import Country from './Country/Country';
import styles from './CountryStat.module.scss';
import caseStatus from '@utils/caseStatus';

export interface CountryStatProps {
    casesState: caseStatus
}

const CountryStat = ({casesState}: CountryStatProps) => {
    const globalStore = useContext(GlobalStoreContext);
    const { top, countries } = globalStore.data;
    let countriesArr: JSX.Element[] = [];

    switch (casesState) {
    case caseStatus.confirmed:
        countriesArr = top?.topConfirmed.map((countryCode) => {
            const { totalConfirmed, newConfirmed, country } = countries[countryCode];
            return <Country
              key={countryCode}
              countryName={country}
              additional={newConfirmed}
              total={totalConfirmed}
              countryCode={countryCode}
            />;
        });
        break;
    case caseStatus.deaths:
        countriesArr = top?.topDeaths.map((countryCode) => {
            const { totalDeaths, newDeaths, country } = countries[countryCode];
            return <Country
              key={countryCode}
              countryName={country}
              additional={newDeaths}
              total={totalDeaths}
              countryCode={countryCode}
            />;
        });
        break;
    case caseStatus.recovered:
        countriesArr = top?.topRecovered.map((countryCode) => {
            const { totalRecovered, newRecovered, country } = countries[countryCode];
            return <Country
              key={countryCode}
              countryName={country}
              additional={newRecovered}
              total={totalRecovered}
              countryCode={countryCode}
            />;
        });
        break;
    default: break;
    }

    return (
        <div className={styles.list}>
            {countriesArr}
        </div>
    );
};

export default observer(CountryStat);
