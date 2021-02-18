import React from 'react';
import SideBar from '@App/Sidebar';
import Main from '@App/Home/Main';

function Home() {
    return (
      <React.Fragment>
        <Main />
        <SideBar />
      </React.Fragment>
    );
}
export default Home;
