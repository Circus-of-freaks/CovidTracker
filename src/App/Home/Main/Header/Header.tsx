import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
      <div className={styles.header}>
        <h1>CovidTracker</h1>
        <p className={styles.description}>Статистика по миру</p>
      </div>
    );
}

export default Header;
