import React from 'react';
import SideBar from '@Sidebar/Sidebar';
import Main from '@App/Home/Main/Main';

function Home() {
    return (
      <React.Fragment>
        <Main />
        <SideBar />
      </React.Fragment>
    );
}
export default Home;
