import React, {useState} from 'react'
import './Sidebar.css'
import DateCarousel from "./DateCarousel/DateCarousel";
import ContryStat from "./CountryStat/CountryStat";

const SideBar: React.FC = () => {
    const date = new Date();
    const [dayDate, setDayDate] = useState(date)
    const [dayNumber, setDayNumber] = useState(date.getDay())

    React.useEffect(() => {
        console.log(`CHANGED: ${dayNumber}`)
    }, [dayNumber])

    return <div className={'sidebar'}>
        <h2 className={'sidebar-header'}>Cases Info</h2>
        <DateCarousel
            dayDate={dayDate}
            updateDayDate={setDayDate}
            dayNumber={dayNumber}
            updateDayNumber={setDayNumber}
        />
        <ContryStat
            dayNumber={dayNumber}
        />
    </div>
}

export default SideBar