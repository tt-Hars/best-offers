// some utilities used across application

export const isEmpty = (arr: Array<unknown>) => {
  return arr.length === 0
}

export const formatDate = (date: string, year = false) => {
  let dateArr = []
  dateArr = year ? date.split(' ') : date.split(' ').slice(0, 3)
  return `${dateArr[0]}, ${dateArr.splice(1, dateArr.length).join(' ')}`
}

export const randomTime = () => {
  const hrs = Math.round(Math.random() * 24)
  const mins = Math.round(Math.random() * 60)
  const hFormat = hrs < 10 ? '0' : ''
  const mFormat = mins < 10 ? '0' : ''
  const amPm = hrs < 12 ? 'AM' : 'PM'
  const is12 = hrs % 12 === 0

  return amPm === 'AM' && !is12
    ? `${hFormat}${hrs}:${mFormat}${mins} ${amPm}`
    : 'AM' && is12
    ? `12:${mFormat}${mins} ${amPm}`
    : is12
    ? `${hFormat}${hrs}:${mFormat}${mins} ${amPm}`
    : `${hFormat}${hrs - 12}:${mFormat}${mins} ${amPm}`
}

export const resetData = async (store: any) => {
  store.$reset()
  await store.fetchCountriesAndStations()
  await store.fetchFlightResults({
    offer: { value: 'amadeusBestOffer' }, //filters.value.offer,
    origin: '',
    destination: ''
  })
}
