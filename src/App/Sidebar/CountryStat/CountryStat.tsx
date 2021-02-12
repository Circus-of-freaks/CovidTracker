import React from 'react';
import Country from '@CountryStat/Country';

export interface CountryStatProps {
    dayNumber: number
}

const CountryStat = ({ dayNumber }: CountryStatProps) => (
  <div className="sidebar-countries">
    cur day inndex :
    {' '}
    {dayNumber}
    <Country countryName="Russia" />
  </div>
);

export default CountryStat;
