import React from 'react';
import styles from './Country.module.scss';

export interface CountryProps {
  countryName: string;
  additional: number;
  total: number;
  countryCode: string;
}

const Country = ({ countryName, additional, total, countryCode }: CountryProps) => (
  <div className={styles.country}>
    <div className={styles.info}>
      <img className={styles.icon} src={require(`./countriesIcon/${countryCode.toLowerCase()}.png`)} alt="error" />
      <div className={styles.name}>{countryName}</div>
      <div className={styles.additional}>+{additional}</div>
    </div>
    <div className={styles.total}>{total}</div>
  </div>
);

export default Country;
