import React from 'react';
import { match } from 'react-router';

export interface CountryPageProps {
    router: match<any>,
}

const CountryPage = ({router} : CountryPageProps) => {
    console.log(router.params.code);
    return (
        <div>dke</div>
    );
};

export default CountryPage;
