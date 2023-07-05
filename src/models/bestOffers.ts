/**
 *
 *  offers description
 *  amadeusExactMatch = retrieves the lowest flight price for the given travel dates.
 *  amadeusOptimizedPrice = retrieves the lowest flight price for the given travel dates +- 7 days.
 *  amadeusBestPrice = retrieves the lowest flight price within the next 12 month
 *  amadeusOptimizedBestPrice = retrieves the lowest flight price for the given travel dates +- 15 days.
 */

export interface IPrice {
  amount: number
  currency: string
}

export interface IBestOffers {
  origin: string
  destination: string
  departureDate: string
  returnDate: string
  seatAvailability: number
  price: IPrice
  cabinCode: string
  offerType: string
  uuid: string
}

export type TBestOffersResponse = {
  offers: IBestOffers[]
  page: number
  pageCount: number
}
