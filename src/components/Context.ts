import {createContext} from 'react';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';

// @ts-ignore
const Context = createContext<GlobalStatStore>();

export default Context;