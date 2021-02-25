const covidApi = (endpoint: string): string => `https://api.covid19api.com/${endpoint}`;

const apiUrls = {
    country: {
        afterDate: (country: string): string => `https://api.covid19api.com/live/country/${country}/status/confirmed/date/2021-01-01T13:13:30Z`
    },
    global: (): string => covidApi('summary'),
};

export default apiUrls;
