import React, { useState } from 'react';
import './DateCarousel.css';
import { days } from '@utils/dateDays';

export interface DateCarouselProps {
    dayDate: Date,
    updateDayDate: React.Dispatch<React.SetStateAction<Date>>,
    pickerDay: number,
    setPickerDay: React.Dispatch<React.SetStateAction<number>>,
    dayNumber: number
}

const DateCarousel = ({
    dayDate,
    updateDayDate,
    pickerDay,
    setPickerDay,
    dayNumber,
}: DateCarouselProps) => {
    const [carousel, setCarousel] = useState<number[]>([]);
    const [selectedNumber, setSelectedNumber] = useState<number>(0);

    React.useEffect(() => {
        const setCarouselDays = () => {
            const tempArr: number[] = [];
            const dayIndex: number = dayNumber - 1;
            const tempDate: Date = new Date(dayDate);

            for (let i = dayIndex; i >= 0; i--) {
                tempArr[i] = tempDate.getDate();
                tempDate.setDate(tempDate.getDate() - 1);
            }

            tempDate.setDate(dayDate.getDate());

            for (let i = dayIndex; i < 7; i++) {
                tempArr[i] = tempDate.getDate();
                tempDate.setDate(tempDate.getDate() + 1);
            }

            setCarousel(tempArr);
        };

        setCarouselDays();
    }, [dayDate, pickerDay]);

    const nextWeek = (): void => {
        updateDayDate((prevState) => new Date(prevState.setDate(prevState.getDate() + 7)));
    };

    const prevWeek = (): void => {
        updateDayDate((prevState) => new Date(prevState.setDate(prevState.getDate() - 7)));
    };

    const pickDay = (index: number): void => {
        setPickerDay(index);
        setSelectedNumber(index);
    };

    return (
      <div className="sidebar-date">
        <div className="carousel-days">
          {days.map((dayItem, index) => (
              // eslint-disable-next-line react/no-array-index-key
            <span key={`dayItem_${index}`} className="days-dayName">
              {dayItem}
            </span>
              ))}
        </div>
        <div className="date-week">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span onClick={() => prevWeek()} className="week-prev" />
          <div className="week-numbers">
            {carousel.map((carouselItem, index) => (
                // eslint-disable-next-line max-len
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <span
                  // eslint-disable-next-line react/no-array-index-key
                key={`numberItem_${index}`}
                onClick={() => pickDay(index)}
                className={`numbers-dayNumber ${index === selectedNumber ? 'active' : ''}`}
              >
                {carouselItem}
              </span>
                  ))}
          </div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span onClick={() => nextWeek()} className="week-next" />
        </div>
      </div>
    );
};

export default DateCarousel;
