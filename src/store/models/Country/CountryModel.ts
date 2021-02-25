export type CountryInfo = {
    Confirmed: number,
    Deaths: number,
    Active: number,
    Recovered: number
}

export type CountryModel = Record<string, CountryInfo>