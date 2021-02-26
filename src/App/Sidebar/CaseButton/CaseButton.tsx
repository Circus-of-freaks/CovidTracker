import React, { useCallback } from 'react';
import caseStatus from '@utils/caseStatus';
import styles from './CaseButton.module.scss';

export interface CaseButtonProps {
  onClick(state: caseStatus): void,
  state: caseStatus,
  caseName: caseStatus
}

const CaseButton = ({onClick, state, caseName}: CaseButtonProps) => {
    const handleClick = useCallback(() => onClick(caseName), [caseName]);

    return (
    <button className={`${styles.caseBtn} ${state === caseName ? styles.active : ''}`} onClick={handleClick}>
      {caseName}
    </button>
    );
};

export default CaseButton;
