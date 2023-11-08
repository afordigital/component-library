import { describe, it, expect } from 'vitest'

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from '../Button'

describe('Button Component Behaviour', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Button>Button example test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
