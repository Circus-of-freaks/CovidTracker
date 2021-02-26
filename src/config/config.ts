const urls = {
    HOME: '/',
    SEARCH: '/search',
    WARNING: '/warning',
    COUNTRY: '/country/:code'
};

export const routes = {
    country: (code: string) => `/country/${code}`
};

export default urls;
