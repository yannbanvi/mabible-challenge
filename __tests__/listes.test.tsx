/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Listes from '../app/listes/page' 
describe('Listes', () => {
  it('renders Listes page successfully', () => {
    render(<Listes />)
 
    const mainContent = screen.getByTestId('listes-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})