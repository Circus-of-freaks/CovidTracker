import React from 'react';
import { Link } from 'react-router-dom';
import urls from '@Config/config';
import homeIcon from './icons/home-icon.svg';
import styles from './Nav.module.scss';

function Nav() {
    return (
      <nav>
        <Link to={urls.HOME}>
          <img className={styles.icon} src={homeIcon} alt="home" />
        </Link>
        <div className={styles.special}>
          <Link to={urls.SEARCH}>
            <div className={styles.search} />
          </Link>
          <Link to={urls.WARNING}>
            <div className={styles.warning} />
          </Link>
        </div>
      </nav>
    );
}

export default Nav;
