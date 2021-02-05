import React, {useState} from 'react'
import './DateCarousel.css'
import {days} from "../../../utils/dateDays";
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow_right.svg'

export interface DateCarouselProps {
    dayDate: Date,
    updateDayDate: React.Dispatch<React.SetStateAction<Date>>,
    dayNumber: number,
    updateDayNumber: React.Dispatch<React.SetStateAction<number>>
}

const DateCarousel = ({dayDate, updateDayDate, dayNumber, updateDayNumber}: DateCarouselProps) => {
    const [carousel, setCarousel] = useState<number[]>([]);

    React.useEffect(() => {
        const setCarouselDays = () => {
            let tempArr: number[] = [];
            let dayIndex = dayNumber - 1;
            let tempDate = new Date(dayDate)

            for (let i = 0; i < 7; i++) {
                tempArr[i] = 0;
            }

            tempArr[dayIndex] = tempDate.getDate()

            for (let i = dayIndex; i >= 0; i--) {
                tempArr[i] = tempDate.getDate()
                tempDate.setDate(tempDate.getDate() - 1)
            }

            tempDate.setDate(dayDate.getDate())

            for (let i = dayIndex; i < 7; i++) {
                tempArr[i] = tempDate.getDate()
                tempDate.setDate(tempDate.getDate() + 1)
            }

            setCarousel(tempArr)
        }

        setCarouselDays()
    }, [dayDate])

    return <div className={'sidebar-date'}>
            <span
                onClick={() => updateDayDate(prevState =>
                    new Date(prevState.setDate(prevState.getDate() - 7)))}
                className="date-prev"
            />
        <div className="date-carousel">
            {
                days.map((day, index) =>
                    <div
                        key={`${day + String(index)}`}
                        className={'date-item'}>
                        <span className={`item-name`}>
                         {day}
                         </span>
                        <span
                            onClick={() => {
                                updateDayNumber(index)
                            }}
                            className={`item-number`}>
                        {carousel[index]}
                    </span>
                    </div>
                )
            }
        </div>
        <span
            onClick={() => updateDayDate(prevState =>
                new Date(prevState.setDate(prevState.getDate() + 7)))}
            className="date-next"
        />
    </div>
}

export default DateCarousel