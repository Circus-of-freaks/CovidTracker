import React, {useState} from 'react'
import './Sidebar.css'
import DateCarousel from "./DateCarousel/DateCarousel";
import ContryStat from "./CountryStat/CountryStat";

const SideBar : React.FC = () => {
    const [dayCount, setDayCount] = useState(0)

    React.useEffect(() => {
        console.log(`CHANGED: ${dayCount}`)
    }, [dayCount])

    return <div className={'sidebar'}>
        <h2 className={'sidebar-header'}>Cases Info</h2>
        <DateCarousel updateDayNumber={setDayCount}/>
        <ContryStat/>
    </div>
}

export default SideBar