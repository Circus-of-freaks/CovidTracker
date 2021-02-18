import React from 'react';
import Header from '@App/Home/Main/Header';
import Stat from '@App/Home/Main/Stat';
import './Main.css';

function App() {
    return (
      <div className="main">
        <Header />
        <Stat />
        <Map />
      </div>
    );
}

export default App;
