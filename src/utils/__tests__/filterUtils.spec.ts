import { expect, it, describe } from 'vitest'
import { transformCountryDataDisplayString } from '../filterUtils'

const data = {
  countries: [
    {
      countryCode: 'US',
      name: 'United States'
    },
    {
      countryCode: 'CA',
      name: 'Canada'
    }
  ],
  stations: [
    {
      name: 'New York City',
      tlc: 'NYC',
      countryCode: 'US'
    },
    {
      name: 'Toronto',
      tlc: 'YTO',
      countryCode: 'CA'
    }
  ]
}

const expected = [
  {
    title: 'New York City - NYC',
    subtitle: 'City in United States (US)'
  },
  {
    title: 'Toronto - YTO',
    subtitle: 'City in Canada (CA)'
  }
]

describe('filterUtils', () => {
  it('should transform country data into a format that can be displayed', () => {
    const actual = transformCountryDataDisplayString(data)
    expect(actual).toEqual(expected)
  })
})
