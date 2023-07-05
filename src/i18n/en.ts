export const lang = {
  common: {
    whereFrom: 'Where from?',
    whereTo: 'Where to?',
    search: 'search',
    departureDate: 'Departure date',
    returnDate: 'Return date',
    offer: 'Select offer',
    back: 'Back',
    flights: 'Flights'
  },
  search: {
    subHeading: (type: string, origin: string, destination: string) => {
      return `Currently showing ${type} from ${origin} to ${destination}`
    },
    heading: 'Best Price offers',
    letsFly: `Let's fly!`,
    departingFlight: 'Departing Flight',
    returningFlight: 'Returning Flight',
    extra: 'Extra',
    aboveAvg: 'Above average',
    average: 'Average',
    legroom: 'legroom',
    seatsAvailable: 'Seats available:',
    class: 'class'
  },
  journey: {
    heading: (uuid: string) => `Start your booking journey for ${uuid}`
  },
  home: {
    imgAlt: 'Woman with her child waving at an aeroplane flying above the mountains'
  },
  validations: {
    required: 'The field is required',
    sameOriginDestination: 'Origin and destination cannot be same',
    beforeToday: 'The date should not be before today',
    startDateBeforeEndDate: 'Start date must be before end date',
    endDateAfterStartDate: 'End date must be after start date'
  }
}
