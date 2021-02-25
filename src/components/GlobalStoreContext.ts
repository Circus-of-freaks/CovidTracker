import {createContext} from 'react';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';

const GlobalStoreContext = createContext<GlobalStatStore>({} as GlobalStatStore);

export default GlobalStoreContext;
