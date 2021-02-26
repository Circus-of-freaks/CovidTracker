import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import GlobalStoreContext from '@components/GlobalStoreContext';
import SearchStore from '@Store/SearchStore/SearchStore';
import {observer} from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './Search.scss';

function Search() {
    const globalStore = useContext(GlobalStoreContext);
    const [store] = useState(new SearchStore(globalStore.data.countries));
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = useCallback(() => store.updateInput(ref.current?.value), [store.input]);

    useEffect(() => {
        store.filteredData = store.data.map(country => {
            if (country.toLowerCase().includes(store.input?.toLowerCase() as string)) {
                return country;
            } else {
                return;
            }
        }).filter(i => i !== undefined) as string[];
    },[store.input]);

    return <div className={'search'}>
        <div className="search__input">
            <input
                ref={ref}
                value={store.input}
                type="text"
                placeholder=' '
                onChange={handleChange}/>
            <label>
                Enter country name
            </label>
        </div>
        <div className="search__list">
            {
                store.filteredData.map((i) => <Link
                    to={`/country/${store.iso[i]}`}
                    className={'list__item'}
                    key={i}>{i}
                </Link>)
            }
        </div>
    </div>;
}

export default observer(Search);
