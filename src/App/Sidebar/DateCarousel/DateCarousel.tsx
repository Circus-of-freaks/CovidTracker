import React, { useState } from 'react';
import { days } from '@utils/dateDays';
import CarouselItem from '@App/Sidebar/DateCarousel/CarouselItem';
import styles from './DateCarousel.module.scss';

export interface DateCarouselProps {
    dayDate: Date,
    updateDayDate(d: Date): void,
    pickerDay: number,
    setPickerDay(n: number): void,
    dayNumber: number
}

const DateCarousel = ({
    dayDate,
    updateDayDate,
    setPickerDay,
    dayNumber,
}: DateCarouselProps) => {
    const [carousel, setCarousel] = useState<number[]>([]);
    const [selectedNumber, setSelectedNumber] = useState<number>(dayDate.getDay() - 1);

    React.useEffect(() => {
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
    }, [dayDate]);

    const nextWeek = (): void => {
        updateDayDate(new Date(dayDate.setDate(dayDate.getDate() + 7)));
    };

    const prevWeek = (): void => {
        updateDayDate(new Date(dayDate.setDate(dayDate.getDate() - 7)));
    };

    const pickDay = (index: number): void => {
        setPickerDay(index);
        setSelectedNumber(index);
    };

    return (
      <div className={styles.date}>
        <div className={styles.carousel}>
          {days.map((dayItem) => (
            <span key={dayItem} className={styles.dayName}>
              {dayItem}
            </span>
              ))}
        </div>
        <div className={styles.week}>
          <button type="button" onClick={prevWeek} className={styles.prevWeek} />
          <div className={styles.numbers}>
            {carousel.map((carouselItem, index) => (
              <CarouselItem
                onClick={pickDay}
                item={carouselItem}
                index={index}
                selectedItem={selectedNumber}
              />
            ))}
          </div>
          <button type="button" onClick={nextWeek} className={styles.nextWeek} />
        </div>
      </div>
    );
};

export default DateCarousel;
