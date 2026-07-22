import { URLSearchParams } from 'node:url'

export function normalizeCompanySize(companySize) {
  if (!companySize) return ''

  return companySize
    .replace(/\s*employees?/i, '')
    .replace(/\s+/g, '')
    .replace(/\+/, '+')
}

export function buildGoogleFormPayload(payload = {}) {
  const params = new URLSearchParams()

  params.set('entry.1633920210', payload.name || '')
  params.set('entry.227649005', payload.email || '')
  params.set('entry.790080973', normalizeCompanySize(payload.companySize))
  params.set('entry.1846923513', payload.challenges || '')
  params.set('entry.426991864', payload.processes || '')

  return params
}
