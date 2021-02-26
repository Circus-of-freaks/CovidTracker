import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@App/Home';
import Nav from '@App/Home/Nav';
import Search from '@App/Search';
import urls from '@Config/config';
import GlobalStoreContext from '@Store/GlobalStatStore/GlobalStoreContext';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import CountryPage from '@App/CountryPage/CountryPage';
import styles from './App.module.scss';
import { observer } from 'mobx-react';

function App() {
    const [globalStatStore] = useState(() => new GlobalStatStore());

    useEffect(() => {
        globalStatStore.fetch();
    }, []);
    
    if (globalStatStore.data.global !== undefined) {
        return (
        <div className={styles.app}>
          <GlobalStoreContext.Provider value={globalStatStore}>
            <Nav />
            <Switch>
              <Route
                exact path={urls.COUNTRY}
                render={(routerProps) => <CountryPage router={routerProps.match}/>}
              />
            </Switch>
            <Route exact path={urls.SEARCH} component={Search} />
            <main>
              <Switch>
                <Route exact path={urls.HOME} component={Home} />
              </Switch>
            </main>
          </GlobalStoreContext.Provider>
        </div>
        );
    } else {
        return <div className={styles.app}>Still loading</div>;
    }
    
}

export default observer(App);
