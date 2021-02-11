import React from 'react';
import styles from '@App/./App.module.scss';
import { Route, Switch } from 'react-router-dom';
import SideBar from '@Sidebar/Sidebar';
import Main from '@Main/Main';
import urls from '@Config/config';
import Search from '@App/Search/Search';
import Nav from '@App/Nav/Nav';

function App() {
    return (
      <div className={styles.app}>
        <Nav />
        <Switch>
          <main>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Main />
                  <SideBar />
                </>
                )} />
            <Route exact path={urls.SEARCH} component={Search} />
          </main>
        </Switch>
      </div>
    );
}

export default App;
