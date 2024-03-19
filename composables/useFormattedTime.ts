import TimeAgo from "javascript-time-ago"
import en from 'javascript-time-ago/locale/en'

export function useFormattedTime(timestamp: number, type: string = 'AGO') {
  switch (type) {
    case 'AGO':
      TimeAgo.addLocale(en)
      const timeAgo = new TimeAgo('en-us')
      const date = new Date(timestamp)
      return timeAgo.format(date.getTime(), 'round')
    case 'NORMAL':
      return new Date(timestamp)?.toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
  }
}