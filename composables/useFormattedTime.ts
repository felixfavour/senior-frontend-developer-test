import TimeAgo from "javascript-time-ago"
import en from 'javascript-time-ago/locale/en'

export function useFormattedTime(timestamp: number) {
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-us')
  const date = new Date(timestamp)
  return timeAgo.format(date.getTime(), 'round')
}