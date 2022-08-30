export class Country {
  constructor(
    public name: string = '',
    public topLevelDomain: string[] = [],
    public alpha2Code: string = '',
    public alpha3Code: string = '',
    public callingCodes: string[] = [],
    public capital: string = '',
    public altSpellings: string[] = [],
    public region: string = '',
    public subregion: string = '',
    public population: string = '',
    public latlng: string[] = [],
    public demonym: string = '',
    public area: string = '',
    public gini: string = '',
    public timezones: string[] = [],
    public borders: string[] = [],
    public nativeName: string = '',
    public numericCode: string = '',
    public currencies: Currency[] = [],
    public languages: Language[] = [],
    public translations: [] = [],
    public flag: string = '',
    public regionalBlocs: [] = [],
    public cioc: string = '',
  ) {}
}
export class Currency {
  constructor(
    public code : string = '',
    public name : string = '',
    public symbol : string = '',
  ) {}
}
export class Language {
  constructor(
    public iso639_1 : string = '',
    public iso639_2 : string = '',
    public name : string = '',
    public nativeName : string = '',
  ) {}
}
