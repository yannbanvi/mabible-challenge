/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Plan from '../app/plan/page' 
describe('Plan', () => {
  it('renders Plan page successfully', () => {
    render(<Plan />)
 
    const mainContent = screen.getByTestId('plan-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})