import { format, isSameDay, addDays, subDays } from 'date-fns'

export const formatDate = (date: Date): string => {
  // We use the closest quarter of minutes
  const minutes = date.getMinutes()
  const minutesQuarterDiff = minutes % 15
  if (minutesQuarterDiff >= 8) {
    date.setMinutes(minutes + 15 - minutesQuarterDiff)
  } else if (minutesQuarterDiff > 0) {
    date.setMinutes(minutes - minutesQuarterDiff)
  }
  return format(date, `yyyy-MM-dd'T'HH:mm`)
}

export const formatDateToDisplay = (dateToDisplay: string | Date): string => {
  if (typeof dateToDisplay === 'string') {
    dateToDisplay = new Date(dateToDisplay)
  }
  return (
    dateToDisplay.toLocaleDateString() +
    ' ' +
    dateToDisplay.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  )
}

export const formatDateForDatePicker = (date: string): string => {
  return format(new Date(date), 'yyyy-MM-dd')
}

export { isSameDay, addDays, subDays }
