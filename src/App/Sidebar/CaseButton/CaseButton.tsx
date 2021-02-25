import React, { useCallback } from 'react';
import caseStatus from '@utils/caseStatus';
import styles from './CaseButton.module.scss';

export interface CaseButtonProps {
  onClick(state: caseStatus): void,
  caseName: caseStatus
}

const CaseButton = ({onClick, caseName}: CaseButtonProps) => {
    // const handleClick = () => onClick(caseName);
    const handleClick = useCallback(() => onClick(caseName), [caseName]);

    return (
    <button className={styles.caseBtn} onClick={handleClick}>
      {caseName}
    </button>
    );
};

export default CaseButton;
