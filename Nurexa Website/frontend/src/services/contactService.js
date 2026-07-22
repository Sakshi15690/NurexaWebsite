const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx3S0bo8XP0sgwEY560fjCrCV8t8-FC6OGmnK6pW9x6PUIm79wvjMYXFY0tUjqm-u0x/exec'

export async function submitInquiry(payload) {
  const response = await fetch(APPS_SCRIPT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Unable to submit your request right now.')
  }

  return data
}
