import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the hero section text', () => {
    render(<App />)
    expect(screen.getByText(/Digital Magic/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Services/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Portfolio/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Contact/i)[0]).toBeInTheDocument()
  })
})
