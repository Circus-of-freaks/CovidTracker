import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
      <div className={styles.header}>
        <h1>CovidTracker</h1>
        <p className={styles.description}>Global statistics</p>
      </div>
    );
}

export default Header;
