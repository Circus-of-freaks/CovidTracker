import React, {useState} from 'react'
import './DateCarousel.css'
import {days} from "../../../utils/dateDays";

export interface DateCarouselProps {
    dayDate: Date,
    updateDayDate: React.Dispatch<React.SetStateAction<Date>>,
    pickerDay: number,
    setPickerDay: React.Dispatch<React.SetStateAction<number>>,
    dayNumber: number
}

const DateCarousel = ({dayDate, updateDayDate, pickerDay, setPickerDay, dayNumber}: DateCarouselProps) => {
    const [carousel, setCarousel] = useState<number[]>([]);
    const [selectedNumber, setSelectedNumber] = useState<number>(0);

    React.useEffect(() => {
        const setCarouselDays = () => {
            let tempArr: number[] = [];
            let dayIndex: number = dayNumber - 1;
            let tempDate: Date = new Date(dayDate);

            for (let i = dayIndex; i >= 0; i--) {
                tempArr[i] = tempDate.getDate();
                tempDate.setDate(tempDate.getDate() - 1);
            }

            tempDate.setDate(dayDate.getDate())

            for (let i = dayIndex; i < 7; i++) {
                tempArr[i] = tempDate.getDate();
                tempDate.setDate(tempDate.getDate() + 1);
            }

            setCarousel(tempArr);
        }

        setCarouselDays()
    }, [dayDate, pickerDay])

    return <div className={'sidebar-date'}>
        <div className="carousel-days">
            {days.map((dayItem, index) =>
                <span
                    key={`dayItem_${index}`}
                    className={'days-dayName'}>
                    {dayItem}
                </span>)}
        </div>
        <div className="date-week">
            <span
                onClick={() => updateDayDate(prevState =>
                    new Date(prevState.setDate(prevState.getDate() - 7)))}
                className={'week-prev'}/>
            <div className="week-numbers">
                {carousel.map((carouselItem, index) =>
                    <span
                        key={`numberItem_${index}`}
                        onClick={() => {
                            setPickerDay(index)
                            setSelectedNumber(index)
                        }}
                        className={`numbers-dayNumber ${index === selectedNumber ? 'active' : ''}`}>
                        {carouselItem}
                    </span>)}
            </div>
            <span
                onClick={() => updateDayDate(prevState =>
                    new Date(prevState.setDate(prevState.getDate() + 7)))}
                className={'week-next'}/>
        </div>
    </div>
}

export default DateCarousel