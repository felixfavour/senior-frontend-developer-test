import { describe, it, expect } from 'vitest'
import { useFormattedTime } from '../useFormattedTime.js'

describe('useFormattedTime', () => {
  it('returns formatted time in "AGO" format', () => {
    const timestamp = Date.now() - (1000 * 60 * 60 * 2)
    const formattedTime = useFormattedTime(timestamp, 'AGO')

    expect(formattedTime).toBe('2 hours ago')
  })

  it('returns formatted time in "NORMAL" format', () => {
    const timestamp = new Date('2022-01-01').getTime()
    const formattedTime = useFormattedTime(timestamp, 'NORMAL')

    expect(formattedTime).toBe('1 January 2022')
  })
})
