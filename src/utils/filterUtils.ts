import { TStationsDisplay, IStations } from '@/models/countries'

// utility to modify the station's dropdowns display data
export function transformCountryDataDisplayString(data: any): Array<TStationsDisplay> {
  const displayStringArr: Array<TStationsDisplay> = []
  const { countries, stations } = data
  stations.forEach((station: IStations) => {
    const constructedString = {
      title: '',
      subtitle: ''
    }
    constructedString.title = `${station.name} - ${station.tlc}`
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i]
      if (country.countryCode === station.countryCode) {
        constructedString.subtitle = `City in ${country.name} (${station.countryCode})`
        break
      }
    }
    displayStringArr.push(constructedString)
  })
  return displayStringArr
}
