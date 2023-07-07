const BASE_URL = `http://${window.location.hostname}/`
const PORT = 'api'
export default {
  COUNTRIES: `${BASE_URL}${PORT}/countries`,
  PRICE_OFFERS: `${BASE_URL}${PORT}/priceOffers`
}
