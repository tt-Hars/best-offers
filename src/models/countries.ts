export interface ICountries {
  countryCode: string
  name: string
  currencyCode: string
}

export interface IStations {
  tlc: string
  name: string
  countryCode: string
  isOrigin: boolean
  isDestination: boolean
}

export type TCountriesResponse = {
  countries: Array<ICountries>
  stations: Array<IStations>
}

export type TStationsDisplay = {
  title: string
  subtitle: string
}
