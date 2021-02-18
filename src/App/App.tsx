import React from 'react';
import styles from '@App/./App.module.scss';
import { Route, Switch } from 'react-router-dom';
import urls from '@Config/config';
import Search from '@App/Search';
import Nav from '@App/Home/Nav';
import Home from '@App/Home';

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
