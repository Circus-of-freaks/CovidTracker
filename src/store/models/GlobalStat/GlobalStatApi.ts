import type {
    GlobalStatModel,
    TopCountries,
} from '@Models/GlobalStat/GlobalStatModel';

const TOP_COUNTRIES_NUMBER = 20;

type GlobalStat = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

type CountryStatApi = {
  readonly [index: string]: string | number;

  Country: string;
  CountryCode: string;
  TotalConfirmed: number;
  NewConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

export type GlobalStatApi = {
  Global: GlobalStat;
  Countries: CountryStatApi[];
};

function computeTopCountries(
    topCountries: TopCountries,
    topCountriesNames: Record<string, CountryStatApi>,
    country: CountryStatApi,
): void {
    for (const [name, top] of Object.entries(topCountries)) {
        let tmpProp: string;
        switch (name) {
        case 'topConfirmed':
            tmpProp = 'TotalConfirmed';
            break;
        case 'topDeaths':
            tmpProp = 'TotalDeaths';
            break;
        case 'topRecovered':
            tmpProp = 'TotalRecovered';
            break;
        default:
            return;
        }
        if (top.length < TOP_COUNTRIES_NUMBER) {
            top.push(country.CountryCode);
            if (topCountriesNames[country.CountryCode] === undefined) {
                topCountriesNames[country.CountryCode] = country;
            }
            if (top.length === TOP_COUNTRIES_NUMBER) {
                top.sort((first, second) => {
                    if (
                        typeof topCountriesNames[first][tmpProp] === 'number'
            && typeof topCountriesNames[second][tmpProp] === 'number'
                    ) {
                        return -(
              <number>topCountriesNames[first][tmpProp]
              - <number>topCountriesNames[second][tmpProp]
                        );
                    }
                    return 0;
                });
            }
            continue;
        }

        if (top.length === TOP_COUNTRIES_NUMBER
            && topCountriesNames[top[TOP_COUNTRIES_NUMBER - 1]][tmpProp] > country[tmpProp]) {
            continue;
        }

        for (let i = top.length - 1; i > -2; i--) {
            if (i < 0 || topCountriesNames[top[i]][tmpProp] > country[tmpProp]) {
                top.splice(i + 1, 0, country.CountryCode);
                top.pop();
                if (topCountriesNames[country.CountryCode] === undefined) {
                    topCountriesNames[country.CountryCode] = country;
                }
                break;
            }
        }
    }
}

export const normalizeGlobalStatApi = (raw: GlobalStatApi): GlobalStatModel => {
    const topCountries: TopCountries = {
        topConfirmed: [],
        topDeaths: [],
        topRecovered: [],
    };
    const countries: Record<string, CountryStatApi> = {};
    const result = <GlobalStatModel>{};
    result.global = {
        newConfirmed: raw.Global.NewConfirmed,
        totalConfirmed: raw.Global.TotalConfirmed,
        newActive:
      raw.Global.NewConfirmed - raw.Global.NewDeaths - raw.Global.NewRecovered,
        totalActive:
      raw.Global.TotalConfirmed
      - raw.Global.TotalDeaths
      - raw.Global.TotalRecovered,
        newDeaths: raw.Global.NewDeaths,
        totalDeaths: raw.Global.TotalDeaths,
        newRecovered: raw.Global.NewRecovered,
        totalRecovered: raw.Global.TotalRecovered,
    };

    result.countries = {};

    for (const country of raw.Countries) {
        result.countries[country.CountryCode] = {
            country: country.Country,
            newConfirmed: country.NewConfirmed,
            totalConfirmed: country.TotalConfirmed,
            newDeaths: country.NewDeaths,
            totalDeaths: country.TotalDeaths,
            newRecovered: country.NewRecovered,
            totalRecovered: country.TotalRecovered,
        };
        computeTopCountries(topCountries, countries, country);
    }

    return result;
};
