import * as React from 'react';

import log from '@utils/log';

const useAsync = (func: () => Promise<any>, inputs: any[]): void => {
    React.useEffect(() => {
        func().catch(log);
    }, inputs);
};

export default useAsync;
