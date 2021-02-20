import { observer } from 'mobx-react-lite';
import React from 'react';

export interface CountryStatProps {
  dayNumber: number;
}

const CountryStat: React.FC = () => {

    return (
      <div className="sidebar-countries">
        <p>keke</p>
      </div>
    );
};

export default observer(CountryStat);
