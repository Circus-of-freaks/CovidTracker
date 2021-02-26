export type CountryInfo = {
    confirmed: number,
    deaths: number,
    active: number,
    recovered: number,
    date: string,
}

export type CountryModel = Record<string, CountryInfo>;
