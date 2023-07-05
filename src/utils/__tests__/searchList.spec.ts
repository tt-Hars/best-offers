import { expect, it, describe } from 'vitest'
import { massageData } from '../searchList'

const data = [
  {
    origin: 'AMS',
    destination: 'LAS',
    departureDate: '2024-03-10',
    returnDate: '2024-03-11',
    seatAvailability: 155,
    price: {
      amount: 135.19,
      currency: 'EGP'
    },
    cabinCode: 'c',
    offerType: 'amadeusBestOffer',
    uuid: '1fef285c-7b53-49cf-800f-161fa261ea01'
  },
  {
    origin: 'AMS',
    destination: 'MAD',
    departureDate: '2024-08-04',
    returnDate: '2024-08-05',
    seatAvailability: 160,
    price: {
      amount: 192.98,
      currency: 'USD'
    },
    cabinCode: 'f',
    offerType: 'amadeusBestOffer',
    uuid: '8cca76df-b0c1-4a5e-890c-233626617406'
  },
  {
    origin: 'AMS',
    destination: 'MAD',
    departureDate: '2024-08-24',
    returnDate: '2024-08-25',
    seatAvailability: 62,
    price: {
      amount: 801.29,
      currency: 'EUR'
    },
    cabinCode: 'm',
    offerType: 'amadeusExactMatch',
    uuid: 'e0e560e8-e0f8-4587-bfd7-cb581c5c2b3f'
  }
]

const filtersBestOffer = {
  origin: 'Origin - AAX',
  destination: 'Dest - AMS',
  departureDate: '2023-07-22',
  returnDate: '2023-08-21',
  offer: { value: 'amadeusBestOffer', title: '', hint: '' }
}

const filtersExactMatch = {
  origin: 'Origin - AAX',
  destination: 'Dest - AMS',
  departureDate: '2023-07-22',
  returnDate: '2023-08-21',
  offer: { value: 'amadeusExactMatch', title: '', hint: '' }
}

const filtersAmadeusOptimizedPrice = {
  origin: 'Origin - AAX',
  destination: 'Dest - AMS',
  departureDate: '2023-07-22',
  returnDate: '2023-08-21',
  offer: { value: 'amadeusOptimizedBestOffer', title: '', hint: '' }
}

const filtersAmadeusOptimizedBestOffer = {
  origin: 'Origin - AAX',
  destination: 'Dest - AMS',
  departureDate: '2023-07-22',
  returnDate: '2023-08-21',
  offer: { value: 'amadeusOptimizedPrice', title: '', hint: '' }
}

describe('massageData', () => {
  it('should return an array of best offers with the updated dates', () => {
    const actual = massageData(data, filtersBestOffer)
    const expected = [
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Fri Aug 11 2023',
        returnDate: 'Sun Sep 10 2023',
        seatAvailability: 155,
        price: { amount: 135.19, currency: 'EGP' },
        cabinCode: 'c',
        offerType: 'amadeusBestOffer',
        uuid: '1fef285c-7b53-49cf-800f-161fa261ea01'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Fri Aug 11 2023',
        returnDate: 'Sun Sep 10 2023',
        seatAvailability: 160,
        price: { amount: 192.98, currency: 'USD' },
        cabinCode: 'f',
        offerType: 'amadeusBestOffer',
        uuid: '8cca76df-b0c1-4a5e-890c-233626617406'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Fri Aug 11 2023',
        returnDate: 'Sun Sep 10 2023',
        seatAvailability: 62,
        price: { amount: 801.29, currency: 'EUR' },
        cabinCode: 'm',
        offerType: 'amadeusExactMatch',
        uuid: 'e0e560e8-e0f8-4587-bfd7-cb581c5c2b3f'
      }
    ]
    expect(actual).toEqual(expected)
  })
  it('should return an array of exact matches with the updated dates', () => {
    const actual = massageData(data, filtersExactMatch)
    const expected = [
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sat Jul 22 2023',
        returnDate: 'Mon Aug 21 2023',
        seatAvailability: 155,
        price: { amount: 135.19, currency: 'EGP' },
        cabinCode: 'c',
        offerType: 'amadeusBestOffer',
        uuid: '1fef285c-7b53-49cf-800f-161fa261ea01'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sat Jul 22 2023',
        returnDate: 'Mon Aug 21 2023',
        seatAvailability: 160,
        price: { amount: 192.98, currency: 'USD' },
        cabinCode: 'f',
        offerType: 'amadeusBestOffer',
        uuid: '8cca76df-b0c1-4a5e-890c-233626617406'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sat Jul 22 2023',
        returnDate: 'Mon Aug 21 2023',
        seatAvailability: 62,
        price: { amount: 801.29, currency: 'EUR' },
        cabinCode: 'm',
        offerType: 'amadeusExactMatch',
        uuid: 'e0e560e8-e0f8-4587-bfd7-cb581c5c2b3f'
      }
    ]
    expect(actual).toEqual(expected)
  })
  it('should return an array of optimized offers with the updated dates', () => {
    const actual = massageData(data, filtersAmadeusOptimizedPrice)
    const expected = [
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Thu Jul 27 2023',
        returnDate: 'Mon Aug 28 2023',
        seatAvailability: 155,
        price: { amount: 135.19, currency: 'EGP' },
        cabinCode: 'c',
        offerType: 'amadeusBestOffer',
        uuid: '1fef285c-7b53-49cf-800f-161fa261ea01'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Thu Jul 27 2023',
        returnDate: 'Mon Aug 28 2023',
        seatAvailability: 160,
        price: { amount: 192.98, currency: 'USD' },
        cabinCode: 'f',
        offerType: 'amadeusBestOffer',
        uuid: '8cca76df-b0c1-4a5e-890c-233626617406'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Thu Jul 27 2023',
        returnDate: 'Mon Aug 28 2023',
        seatAvailability: 62,
        price: { amount: 801.29, currency: 'EUR' },
        cabinCode: 'm',
        offerType: 'amadeusExactMatch',
        uuid: 'e0e560e8-e0f8-4587-bfd7-cb581c5c2b3f'
      }
    ]
    expect(actual).toEqual(expected)
  })
  it('should return an array of best optimized matches with the updated dates', () => {
    const actual = massageData(data, filtersAmadeusOptimizedBestOffer)
    const expected = [
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sun Aug 06 2023',
        returnDate: 'Sat Sep 02 2023',
        seatAvailability: 155,
        price: { amount: 135.19, currency: 'EGP' },
        cabinCode: 'c',
        offerType: 'amadeusBestOffer',
        uuid: '1fef285c-7b53-49cf-800f-161fa261ea01'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sun Aug 06 2023',
        returnDate: 'Sat Sep 02 2023',
        seatAvailability: 160,
        price: { amount: 192.98, currency: 'USD' },
        cabinCode: 'f',
        offerType: 'amadeusBestOffer',
        uuid: '8cca76df-b0c1-4a5e-890c-233626617406'
      },
      {
        origin: 'Origin, AAX',
        destination: 'Dest, AMS',
        departureDate: 'Sun Aug 06 2023',
        returnDate: 'Sat Sep 02 2023',
        seatAvailability: 62,
        price: { amount: 801.29, currency: 'EUR' },
        cabinCode: 'm',
        offerType: 'amadeusExactMatch',
        uuid: 'e0e560e8-e0f8-4587-bfd7-cb581c5c2b3f'
      }
    ]
    expect(actual).toEqual(expected)
  })
})
