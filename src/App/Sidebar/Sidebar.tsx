import React, {useState} from 'react'
import './Sidebar.css'
import DateCarousel from "./DateCarousel/DateCarousel";
import ContryStat from "./CountryStat/CountryStat";

const SideBar: React.FC = () => {
    const date = new Date();
    const [dayDate, setDayDate] = useState<Date>(date);
    const [dayNumber, setDayNumber] = useState<number>(date.getDay());
    const [pickerDay, setPickerDay] = useState<number>(date.getDay());

    return <div className={'sidebar'}>
        <h2 className={'sidebar-header'}>Cases Info</h2>
        <DateCarousel
            dayDate={dayDate}
            updateDayDate={setDayDate}
            pickerDay={pickerDay}
            setPickerDay={setPickerDay}
            dayNumber={dayNumber}
        />
        <ContryStat
            dayNumber={pickerDay}
        />
    </div>
}

export default SideBar