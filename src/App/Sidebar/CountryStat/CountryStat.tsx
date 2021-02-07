import React from 'react';
import './CountryStat.css';

export interface CountryStatProps {
    dayNumber: number
}

const CountryStat = ({ dayNumber }: CountryStatProps) => (
  <div className="sidebar-countries">
    Countries component, current dayIndex is:
    {dayNumber}
  </div>
);

export default CountryStat;
