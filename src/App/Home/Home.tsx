import React from 'react';
import Main from '@App/Home/Main';
import SideBar from '@App/Sidebar';
import './Home.css';

function Home() {
    return (
      <React.Fragment>
        <Main />
        <SideBar />
      </React.Fragment>
    );
}
export default Home;
