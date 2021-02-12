import React from 'react';

export interface CountryProps {
    countryName: string
}

const Country = ({ countryName } : CountryProps) => (
  <div className="country">
    <div className="name">
      {countryName}
    </div>
  </div>
);

export default Country;
