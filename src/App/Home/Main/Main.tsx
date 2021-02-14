import React from 'react';
import './Main.css';
import Header from '@App/Home/Main/Header/Header';
import Stat from '@App/Home/Main/Stat/Stat';
import Map from '@Main/Map/Map';

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
