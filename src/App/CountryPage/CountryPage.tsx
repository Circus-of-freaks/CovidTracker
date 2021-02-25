import React, {useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { match } from 'react-router';
import countriesJson from '@utils/countries.json';
import './CountryPage.css';
import CountryStore from '@Store/CountryStore/CountryStore';
import Meta from '@utils/meta';
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
    if (store.meta !== Meta.Success) {
        return <div>AHAHAHHAHAH</div>;
    }
    console.log(Object.values(store.data));

    return (

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={Object.values(store.data)}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="confirmed" stroke="#f5c778" dot={false} />
                    <Line type="monotone" dataKey="active" stroke="#f5c778" dot={false} />
                    <Line type="monotone" dataKey="deaths" stroke="#f5c778" dot={false} />
                    <Line type="monotone" dataKey="recovered" stroke="#f5c778" dot={false} />
                </LineChart>
            </ResponsiveContainer>

    );
};

export default observer(CountryPage);
