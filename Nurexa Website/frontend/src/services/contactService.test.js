import { beforeEach, describe, expect, it, vi } from 'vitest'
import { submitInquiry } from './contactService'

describe('submitInquiry', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('posts assessment submissions to the Apps Script endpoint', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    })
    vi.stubGlobal('fetch', fetchMock)

    const result = await submitInquiry({
      type: 'assessment',
      name: 'Ada',
      email: 'ada@example.com',
      companySize: '251-1000 employees',
      challenges: 'Manual reporting',
      processes: 'Invoice processing'
    })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toHaveBeenCalledWith(
      'https://script.google.com/macros/s/AKfycbx3S0bo8XP0sgwEY560fjCrCV8t8-FC6OGmnK6pW9x6PUIm79wvjMYXFY0tUjqm-u0x/exec',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ 'Content-Type': 'application/json' })
      })
    )

    const [, requestInit] = fetchMock.mock.calls[0]
    expect(requestInit.body).toContain('"name":"Ada"')
    expect(requestInit.body).toContain('"email":"ada@example.com"')
    expect(result.success).toBe(true)
  })
})
