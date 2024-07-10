/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Signets from '../app/signets/page' 
describe('Signets', () => {
  it('renders Plan page successfully', () => {
    render(<Signets />)
 
    const mainContent = screen.getByTestId('signets-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})