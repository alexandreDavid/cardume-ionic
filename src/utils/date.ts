import { format } from 'date-fns'

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

export const formatDateToDisplay = (dateAsString: string): string => {
  const date = new Date(dateAsString)
  return (
    date.toLocaleDateString() +
    ' ' +
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  )
}
