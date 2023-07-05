import { expect, describe, it, vi, beforeEach } from 'vitest'
import { useAppStore } from './app.js'
import { setActivePinia, createPinia } from 'pinia'

describe('useAppStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should fetch countries and stations', async () => {
    const store = useAppStore()
    await store.fetchCountriesAndStations()
    expect(store.countries).toBeDefined()
    expect(store.stations).toBeDefined()
  })

  it('should fetch flight results', async () => {
    const store = useAppStore()
    const searchData = await store.fetchFlightResults({
      offer: { value: 'amadeusBestOffer' },
      origin: 'NYK',
      destination: 'SFO'
    })
    expect(store.flightsSearchData).toBeDefined()
  })

  it('should set filters', async () => {
    const store = useAppStore()
    store.setFilters({
      origin: 'Origin - AAX',
      destination: 'Dest - AMS',
      departureDate: '2023-07-22',
      returnDate: '2023-08-21',
      offer: { title: 'title', value: 'amadeusBestOffer', hint: '' }
    })
    expect(store.filters).toEqual({
      origin: 'Origin - AAX',
      destination: 'Dest - AMS',
      departureDate: '2023-07-22',
      returnDate: '2023-08-21',
      offer: { title: 'title', value: 'amadeusBestOffer', hint: '' }
    })
  })
})
