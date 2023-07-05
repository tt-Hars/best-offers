import { expect, describe, it } from 'vitest'
import { isEmpty, formatDate, randomTime, resetData } from '../common'

describe('isEmpty', () => {
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return false for an array with one element', () => {
    expect(isEmpty([1])).toBe(false)
  })

  it('should return false for an array with multiple elements', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })
})

describe('formatDate', () => {
  it('should format a date with year', () => {
    expect(formatDate('Mon June 14 2023', true)).toEqual('Mon, June 14 2023')
  })

  it('should format a date without year', () => {
    expect(formatDate('Mon June 14 2023')).toEqual('Mon, June 14')
  })
})

describe('randomTime', () => {
  it('should return a random time', () => {
    const time = randomTime()
    expect(time).toMatch(/^[0-2]?[0-9]:[0-5][0-9] [AP]M$/)
  })
})

describe('resetData', () => {
  it('should reset the store', async () => {
    const store = {
      countries: ['USA', 'Canada'],
      stations: ['SFO', 'LAX'],
      $reset: function () {
        this.countries.length = 0
        this.stations.length = 0
      },
      fetchCountriesAndStations: () => {},
      fetchFlightResults: () => {}
    }

    await resetData(store)

    expect(store.countries).toEqual([])
    expect(store.stations).toEqual([])
  })
})
