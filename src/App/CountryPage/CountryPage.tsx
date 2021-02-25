import React, {useState} from 'react';
import { match } from 'react-router';
import countriesJson from '@utils/countries.json';
import './CountryPage.css';
import CountryStore from '@Store/CountryStore/CountryStore';
import {observer} from 'mobx-react-lite';

export interface CountryPageProps {
    router: match<any>,
}

type Countries = Record<string, {
    country: string,
}>

const CountryPage = ({router} : CountryPageProps) => {
    const countries = countriesJson as Countries;
    const [store] = useState(new CountryStore(countries[router.params.code].country));
    store.fetch();
    return (
        <div className={'country'}>
            <h2 className={'country__tittle'}>{countries[router.params.code].country}</h2>
        </div>
    );
};

export default observer(CountryPage);
