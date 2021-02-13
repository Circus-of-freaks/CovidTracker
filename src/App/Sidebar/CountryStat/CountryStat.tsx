import React from 'react';
import Country from '@CountryStat/Country/Country';
import { useLocal } from '@utils/useLocal';
import CountryStatStore from '@Store/CountryStatStore/CountryStatStore';

export interface CountryStatProps {
    dayNumber: number
}

const CountryStat : React.FC = () => {
    const store = useLocal(() => new CountryStatStore());

    return (
      <div className="sidebar-countries">
        {store.data.map((country) => (
          <Country
            countryName={country.name}
            additional={country.additional}
            total={country.total}
            />
        ))}
      </div>
    );
};

export default CountryStat;
