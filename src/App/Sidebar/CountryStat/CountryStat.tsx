import React from 'react';
import './CountryStat.css'

export interface CountryStatProps {
    dayNumber: number
}

const ContryStat = ({dayNumber}: CountryStatProps) => {

    return <div className={'sidebar-countries'}>
        Countries component, current dayIndex is: {dayNumber}
    </div>
}

export default ContryStat