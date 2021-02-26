import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import React, {useContext} from 'react';
import CountryStoreContext from '@Store/CountryStore/CountryStoreContext';
import Meta from '@utils/meta';
import {observer} from 'mobx-react-lite';
import styles from './Plot.module.scss';

const Plot = () => {
    const store = useContext(CountryStoreContext);
    if (store.meta !== Meta.Success) {
        return <div />;
    }
    return (
        <ResponsiveContainer width="100%" height="100%" className={styles.plot}>
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
                <Line type="monotone" dataKey="confirmed" stroke="#bf4040" dot={false} />
                <Line type="monotone" dataKey="active" stroke="#f5c778" dot={false} />
                <Line type="monotone" dataKey="deaths" stroke="#8c79f6" dot={false} />
                <Line type="monotone" dataKey="recovered" stroke="#5cc1ac" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default observer(Plot);