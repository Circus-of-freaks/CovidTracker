import React from 'react';
import './App.css';
import SideBar from "./Sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                CovidTracker
            </header>
            <main className={'App-main'}>
                OTHER
                <SideBar/>
            </main>
        </div>
    );
}

export default App;
