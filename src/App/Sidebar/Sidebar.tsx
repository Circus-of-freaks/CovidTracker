import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import CountryStat from '@App/Sidebar/CountryStat';
import caseStatus from '@utils/caseStatus';
import CaseButton from '@App/Sidebar/CaseButton/CaseButton';

const SideBar: React.FC = () => {
    const [casesState, setCasesState] = useState(caseStatus.confirmed);

    return (
      <div className={styles.sidebar}>
        <h2 className={styles.tittle}>Cases Info</h2>
          <div className={styles.cases}>
            <CaseButton onClick={setCasesState} state={casesState} caseName={caseStatus.confirmed}/>
            <CaseButton onClick={setCasesState} state={casesState} caseName={caseStatus.deaths}/>
            <CaseButton onClick={setCasesState} state={casesState} caseName={caseStatus.recovered}/>
          </div>
        <CountryStat casesState={casesState}/>
      </div>
    );
};

export default SideBar;
