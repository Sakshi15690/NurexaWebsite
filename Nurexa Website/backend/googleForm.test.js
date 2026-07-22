import test from 'node:test'
import assert from 'node:assert/strict'
import { buildGoogleFormPayload, normalizeCompanySize } from './googleForm.js'

test('buildGoogleFormPayload maps assessment fields to Google Form entries', () => {
  const params = buildGoogleFormPayload({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    companySize: '251-1000 employees',
    challenges: 'Manual reporting',
    processes: 'Invoice processing'
  })

  assert.equal(params.get('entry.1633920210'), 'Ada Lovelace')
  assert.equal(params.get('entry.227649005'), 'ada@example.com')
  assert.equal(params.get('entry.790080973'), '251-1000')
  assert.equal(params.get('entry.1846923513'), 'Manual reporting')
  assert.equal(params.get('entry.426991864'), 'Invoice processing')
})

test('normalizeCompanySize converts the existing UI values to Google Form values', () => {
  assert.equal(normalizeCompanySize('1-50 employees'), '1-50')
  assert.equal(normalizeCompanySize('51-250 employees'), '51-250')
  assert.equal(normalizeCompanySize('251-1000 employees'), '251-1000')
  assert.equal(normalizeCompanySize('1000+ employees'), '1000+')
})
