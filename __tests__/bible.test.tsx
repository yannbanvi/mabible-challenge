/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Bible from '../app/bible/page' 
describe('Bible', () => {
  it('renders Bible page successfully', () => {
    render(<Bible />)
 
    const mainContent = screen.getByTestId('bible-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})