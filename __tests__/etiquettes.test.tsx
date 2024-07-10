/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Etiquette from '../app/etiquettes/page' 
describe('Bible', () => {
  it('renders Bible page successfully', () => {
    render(<Etiquette />)
 
    const mainContent = screen.getByTestId('etiquettes-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})