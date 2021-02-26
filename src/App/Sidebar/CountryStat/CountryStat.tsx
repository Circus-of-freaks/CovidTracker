import React, { useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import GlobalStoreContext from '@Store/GlobalStatStore/GlobalStoreContext';
import Country from './Country/Country';
import styles from './CountryStat.module.scss';
import caseStatus from '@utils/caseStatus';
import { CountryStatType, TopCountries } from '@Models/GlobalStat/GlobalStatModel';

export interface CountryStatProps {
    casesState: caseStatus
}

type arrItem = {
    countryName: string,
    additional: number,
    total: number,
    countryCode: string
}

const calc = (casesState: caseStatus, top: TopCountries, countries: Record<string, CountryStatType>) : JSX.Element[] | JSX.Element =>{
    if (top === undefined) {
        return <p>Still loading</p>;
    }

    let countriesArr: arrItem[] = [];

    switch (casesState) {
    case caseStatus.confirmed:
        countriesArr = top?.topConfirmed.map((countryCode) => {
            const { totalConfirmed, newConfirmed, country } = countries[countryCode];

            return {
                countryName: country,
                additional: newConfirmed,
                total: totalConfirmed,
                countryCode: countryCode
            };
        });
        break;
    case caseStatus.deaths:
        countriesArr = top?.topDeaths.map((countryCode) => {
            const { totalDeaths, newDeaths, country } = countries[countryCode];

            return {
                countryName: country,
                additional: newDeaths,
                total: totalDeaths,
                countryCode: countryCode
            };
        });
        break;
    case caseStatus.recovered:
        countriesArr = top?.topRecovered.map((countryCode) => {
            const { totalRecovered, newRecovered, country } = countries[countryCode];

            return {
                countryName: country,
                additional: newRecovered,
                total: totalRecovered,
                countryCode: countryCode
            };
        });
        break;
    default: break;

    }
    return countriesArr.map(item => {
        return <Country
          key={item.countryCode}
          countryName={item.countryName}
          additional={item.additional}
          total={item.total}
          countryCode={item.countryCode}
        />;
    });
};

const CountryStat = ({casesState}: CountryStatProps) => {
    const globalStore = useContext(GlobalStoreContext);
    const { top, countries } = globalStore.data;
    
    const memoArr = useMemo(() => calc(casesState, top, countries), [top]);
    return (
        <div className={styles.list}>
            {memoArr}
        </div>
    );
};

export default observer(CountryStat);
