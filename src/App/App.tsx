import React from 'react';
import styles from '@App/./App.module.scss';
import { Route, Switch } from 'react-router-dom';
import urls from '@Config/config';
import Search from '@Search/Search';
import Nav from '@Nav/Nav';
import Home from '@Home/Home';

function App() {
    return (
      <div className={styles.app}>
        <Nav />
        <Switch>
          <main>
            <Route exact path={urls.HOME} component={Home} />
            <Route exact path={urls.SEARCH} component={Search} />
          </main>
        </Switch>
      </div>
    );
}

export default App;
