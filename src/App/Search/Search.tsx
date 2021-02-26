import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import GlobalStoreContext from '@Store/GlobalStatStore/GlobalStoreContext';
import SearchStore from '@Store/SearchStore/SearchStore';
import {observer} from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import {routes} from '@Config/config';
import './Search.scss';

function Search() {
    const globalStore = useContext(GlobalStoreContext);
    const [store] = useState(() => new SearchStore(globalStore.data.countries));
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = useCallback(() => store.updateInput(ref.current?.value), []);

    useEffect(() => {
        store.filteredData = store.data
            .filter(country => country.toLowerCase()
                .includes(store.input?.toLowerCase() as string));
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
                    to={routes.country(store.iso[i])}
                    className={'list__item'}
                    key={i}>{i}
                </Link>)
            }
        </div>
    </div>;
}

export default observer(Search);
