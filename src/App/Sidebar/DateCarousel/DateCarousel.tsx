import React from 'react'
import './DateCarousel.css'
import {days} from "../../../utils/dateDays";

export interface DateCarouselProps {
    updateDayNumber: React.Dispatch<React.SetStateAction<number>>
}

const DateCarousel = ({updateDayNumber} : DateCarouselProps) => {

    return <div className={'sidebar-date'}>
        <div className="date-days">
            {days.map((day, index) =>
                <span
                    key={`${day + String(index)}`}
                    className={'days-item'}
                    onClick={() => updateDayNumber(index)}>
                    {day}
                </span>)}
        </div>
    </div>
}

export default DateCarousel