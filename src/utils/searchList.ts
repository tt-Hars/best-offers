import { addDays } from 'date-fns'
import { serviceTypeKeys } from '@/enums/serviceType'
import { IBestOffers } from '@/models/bestOffers'
import { Ifilter } from '@/models/filter'

// model display data for dashboard
export const getInitialData = (data: IBestOffers[]): IBestOffers[] => {
  const results = []
  for (const obj of data) {
    let idx = 0
    obj.origin = obj.origin.replace(' - ', ', ')
    obj.destination = obj.destination.replace(' - ', ', ')
    obj.departureDate = new Date(obj.departureDate).toDateString()
    obj.returnDate = new Date(obj.returnDate).toDateString()
    // obj.price.amount = Math.floor(Math.random() * 10 + obj.price.amount)
    idx++
    results.push(obj)
    if(idx === 15) break
  }
  return sort('asc', results).splice(0, 15) // get top 15 results
}

// model display data for search list when filters are applied
export const massageData = (data: IBestOffers[], filterItems: Ifilter): IBestOffers[] => {
  const {
    offer: { value: offerValue },
    origin,
    destination,
    departureDate,
    returnDate
  } = filterItems
  const results = []

  for (const obj of data) {
    let idx = 0
    obj.origin = origin.replace(' - ', ', ')
    obj.destination = destination.replace(' - ', ', ')
    const newDepartureDate = addDays(new Date(departureDate), getDepartureOffset(offerValue, idx))
    const newReturnDate = addDays(new Date(returnDate), getReturnOffset(offerValue, idx))
    obj.departureDate = newDepartureDate.toDateString()
    obj.returnDate = newReturnDate.toDateString()
    idx++
    results.push(obj)
  }
  return sort('asc', results)

  // Helper functions.

  function getDepartureOffset(offer: string, idx: number) {
    switch (offer) {
      case serviceTypeKeys.amadeusBestOffer:
        return idx >= 0 && idx <= 50 ? 30 : idx >= 51 && idx <= 100 ? 2 : 36
      case serviceTypeKeys.amadeusExactMatch:
        return 0
      case serviceTypeKeys.amadeusOptimizedBestOffer:
        return idx >= 0 && idx <= 20 ? 5 : idx >= 21 && idx <= 45 ? 3 : 2
      case serviceTypeKeys.amadeusOptimizedPrice:
        return idx >= 0 && idx <= 30 ? 15 : idx >= 31 && idx <= 60 ? 1 : 22
      default:
        return 0
    }
  }

  function getReturnOffset(offer: string, idx: number) {
    switch (offer) {
      case serviceTypeKeys.amadeusBestOffer:
        return idx >= 0 && idx <= 50 ? 20 : idx >= 51 && idx <= 100 ? 2 : 36
      case serviceTypeKeys.amadeusExactMatch:
        return 0
      case serviceTypeKeys.amadeusOptimizedBestOffer:
        return idx >= 0 && idx <= 20 ? 7 : idx >= 21 && idx <= 45 ? 3 : 1
      case serviceTypeKeys.amadeusOptimizedPrice:
        return idx >= 0 && idx <= 30 ? 12 : idx >= 31 && idx <= 60 ? 1 : 17
      default:
        return 0
    }
  }
}

//sort the data
export const sort = (dir = 'asc', results: IBestOffers[]) => {
  return dir === 'asc'
    ? results.sort((a, b) => +a.price.amount - +b.price.amount)
    : results.sort((a, b) => +b.price.amount - +a.price.amount)
}
