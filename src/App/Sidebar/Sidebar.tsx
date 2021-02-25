import React from 'react';

import CountryStat from '@App/Sidebar/CountryStat';
// import DateCarousel from '@App/Sidebar/DateCarousel';

// const date = new Date();
// const dayNumber = date.getDay();

const SideBar: React.FC = () => {
    // const [dayDate, setDayDate] = useState<Date>(date);
    // const [pickerDay, setPickerDay] = useState<number>(date.getDay());

    return (
      <div className="sidebar">
        <h2 className="tittle">Cases Info</h2>
        {/* <DateCarousel
          dayDate={dayDate}
          updateDayDate={setDayDate}
          pickerDay={pickerDay}
          setPickerDay={setPickerDay}
          dayNumber={dayNumber}
      /> */}
        <CountryStat />
      </div>
    );
};

export default SideBar;
