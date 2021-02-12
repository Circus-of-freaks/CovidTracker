import React from 'react';
import './Header.css';

function Header() {
    return (
      <div className="header">
        <h1 className="header__project-name">CovidTracker</h1>
        <p className="header__description">Статистика по миру</p>
      </div>
    );
}

export default Header;
