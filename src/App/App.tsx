import React from 'react';
import './App.css';
import SideBar from './Sidebar/Sidebar';
import Main from './Main/Main';

function App() {
    return (
      <div className="App">
        <main className="App-main">
          <Main />
          <SideBar />
        </main>
      </div>
    );
}

export default App;
