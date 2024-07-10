/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Plus from '../app/plus/page' 
describe('Plus', () => {
  it('renders Plan page successfully', () => {
    render(<Plus />)
 
    const mainContent = screen.getByTestId('plus-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})