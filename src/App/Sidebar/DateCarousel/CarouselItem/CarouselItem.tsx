import React, { useCallback } from 'react';
import styles from './CarouselItem.module.scss';

export interface CarouselItemProps {
  onClick(i: number): void,
  item: number,
  index: number,
  selectedItem: number
}

const CarouselItem = ({
    onClick, item, index, selectedItem,
} : CarouselItemProps) => {
    const handleClick = useCallback(() => { onClick(index); }, [item, onClick]);

    return (
      <button
        type="button"
        key={item}
        onClick={handleClick}
        className={`${styles.dayNumber} ${index === selectedItem ? styles.active : ''}`}
          >
        {item}
      </button>
    );
};

export default CarouselItem;
