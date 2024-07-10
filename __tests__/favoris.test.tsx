/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Favoris from '../app/favoris/page' 
describe('Favoris', () => {
  it('renders Favoris page successfully', () => {
    render(<Favoris />)
 
    const mainContent = screen.getByTestId('favoris-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})