import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

afterEach(() => {
  cleanup()
})
