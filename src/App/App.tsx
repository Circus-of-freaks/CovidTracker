import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Home from '@App/Home';
import Nav from '@App/Home/Nav';
import Search from '@App/Search';
import urls from '@Config/config';
import Context from '../components/Context';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';

function App() {
    const globalStatStore = new GlobalStatStore();
    return (
      <div className={styles.app}>
        <Context.Provider value={globalStatStore}>
          <Nav />
          <main>
            <Switch>
              <Route exact path={urls.HOME} component={Home} />
              <Route exact path={urls.SEARCH} component={Search} />
            </Switch>
          </main>
        </Context.Provider>
      </div>
    );
}

export default App;
