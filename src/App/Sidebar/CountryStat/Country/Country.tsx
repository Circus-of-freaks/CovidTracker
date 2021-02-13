import React from 'react';
import styles from './Country.module.scss';

export interface CountryProps {
    countryName: string,
    additional: number,
    total: number
}

const Country = ({ countryName, additional, total } : CountryProps) => (
  <div className={styles.country}>
    <div className={styles.name}>
      {countryName}
    </div>
    <div className={styles.additional}>
      {additional}
    </div>
    <div className={styles.total}>
      {total}
    </div>
  </div>
);

export default Country;
