import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import Home from '@App/Home';
import Nav from '@App/Home/Nav';
import Search from '@App/Search';
import urls from '@Config/config';

function App() {
    return (
      <div className={styles.app}>
        <Nav />
        <main>
          <Switch>
            <Route exact path={urls.HOME} component={Home} />
            <Route exact path={urls.SEARCH} component={Search} />
          </Switch>
        </main>
      </div>
    );
}

export default App;
