import React from 'react';
import './Stat.css';
import StatCard from '@Stat/StatCard/StatCard';

function Stat() {
    return (
      <div className="stat">
        <StatCard
          title="Заражено"
          number={11000}
          newCases={110}
        />
        <StatCard
          title="Активно"
          number={10000}
          newCases={100}
        />
        <StatCard
          title="Умерло"
          number={50}
          newCases={5}
        />
        <StatCard
          title="Вылечилось"
          number={100}
          newCases={10}
        />
      </div>
    );
}

export default Stat;
