import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@App/Home';
import Nav from '@App/Home/Nav';
import Search from '@App/Search';
import urls from '@Config/config';
import GlobalStoreContext from '@components/GlobalStoreContext';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import CountryPage from '@App/CountryPage/CountryPage';
import styles from './App.module.scss';

function App() {
    const globalStatStore = new GlobalStatStore();
    return (
      <div className={styles.app}>
        <GlobalStoreContext.Provider value={globalStatStore}>
          <Nav />
            <Route
                exact path={urls.COUNTRY}
                render={(routerProps) => <CountryPage router={routerProps.match}/>}
            />
          <main>
            <Switch>
              <Route exact path={urls.HOME} component={Home} />
              <Route exact path={urls.SEARCH} component={Search} />
            </Switch>
          </main>
        </GlobalStoreContext.Provider>
      </div>
    );
}

export default App;
