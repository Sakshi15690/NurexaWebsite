import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'

describe('HomePage', () => {
  it('renders the hero heading', () => {
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    )

    expect(screen.getByText(/Empowering Humans\. Accelerating Businesses with AI\./i)).toBeInTheDocument()
  })
})
