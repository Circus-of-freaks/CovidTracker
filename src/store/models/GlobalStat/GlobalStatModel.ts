type GlobalStat = {
  newConfirmed: number;
  totalConfirmed: number;
  newActive: number;
  totalActive: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
};

export type CountryStat = {
  country: string;
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
};

export type TopCountries = {
  topConfirmed: string[];
  topDeaths: string[];
  topRecovered: string[];
};

export type GlobalStatModel = {
  global: GlobalStat;
  countries: Record<string, CountryStat>;
  top: TopCountries;
};
