import React, { useState } from 'react';
import './Sidebar.css';
import DateCarousel from './DateCarousel/DateCarousel';
import CountryStat from './CountryStat/CountryStat';

const date = new Date();
const dayNumber = date.getDay();

const SideBar: React.FC = () => {
    const [dayDate, setDayDate] = useState<Date>(date);
    const [pickerDay, setPickerDay] = useState<number>(date.getDay());

    return (
      <div className="sidebar">
        <h2 className="sidebar-header">Cases Info</h2>
        <DateCarousel
          dayDate={dayDate}
          updateDayDate={setDayDate}
          pickerDay={pickerDay}
          setPickerDay={setPickerDay}
          dayNumber={dayNumber}
        />
        <CountryStat
          dayNumber={pickerDay}
        />
      </div>
    );
};

export default SideBar;
