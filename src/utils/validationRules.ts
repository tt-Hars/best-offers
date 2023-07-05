import { isAfter, isSameDay } from 'date-fns'
import { lang } from '@/i18n/en'

export const requiredRule = [
  (value: string) => {
    if (value) return true
    return lang.validations.required
  }
]

export const fromToRule = (station: string | undefined) => [
  ...requiredRule,
  (value: string) => {
    return value !== station || lang.validations.sameOriginDestination
  }
]

export const startRules = (returnDate: string, today: Date) => [
  ...requiredRule,
  (v: string) =>
    isAfter(new Date(v), today) || isSameDay(new Date(v), today) || lang.validations.beforeToday,
  (v: string) => !returnDate || v < returnDate || lang.validations.startDateBeforeEndDate
]

export const returnRules = (departureDate: string, today: Date) => [
  ...requiredRule,
  (v: string) =>
    isAfter(new Date(v), today) ||
    isSameDay(new Date(v), today) ||
    'The date should not be before today',
  (v: string) => !departureDate || v > departureDate || lang.validations.endDateAfterStartDate
]
