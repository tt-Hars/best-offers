// Utilities
import { ICountries, IStations, TCountriesResponse } from '@/models/countries'
import { defineStore } from 'pinia'
import endpoints from '@/constants/endpoints'
import { IBestOffers } from '@/models/bestOffers'
import { Ifilter } from '@/models/filter'

export const useAppStore = defineStore('app', {
  state: () => ({
    countries: [] as ICountries[],
    stations: [] as IStations[],
    flightsSearchData: [] as IBestOffers[],
    filters: {} as Ifilter,
    filterFormElementRef: {} as any,
    loading: false
  }),

  getters: {
    getCountries(state) {
      return state.countries
    },

    getStations(state) {
      return state.stations
    },

    getFlightsSearchData(): IBestOffers[] {
      return this.flightsSearchData
    },

    isLoading(state) {
      return state.loading
    }
  },

  actions: {
    async fetchCountriesAndStations() {
      this.loading = true
      try {
        const response = await fetch(endpoints.COUNTRIES)
        const countriesAndStationsData: TCountriesResponse = await response.json()
        this.countries = countriesAndStationsData.countries
        this.stations = countriesAndStationsData.stations
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },

    async fetchFlightResults(payload: { offer: any; origin: string; destination: string }) {
      this.loading = true
      const {
        offer: { value: offerValue },
        origin,
        destination
      } = payload
      try {
        const response = await fetch(
          `${endpoints.PRICE_OFFERS}?` +
            new URLSearchParams({
              offer: offerValue,
              origin,
              destination
            })
        )
        const searchData: IBestOffers[] = await response.json()
        this.flightsSearchData = searchData
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },

    setFilters(filterData: Ifilter) {
      this.filters = { ...filterData }
    },

    setFilterFormRef(formRef: any) {
      this.filterFormElementRef = formRef
    }
  }
})
