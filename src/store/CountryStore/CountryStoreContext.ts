import {createContext} from 'react';
import CountryStore from '@Store/CountryStore/CountryStore';

const CountryStoreContext = createContext<CountryStore>({} as CountryStore);

export default CountryStoreContext;
