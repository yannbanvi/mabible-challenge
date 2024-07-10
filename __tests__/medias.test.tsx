/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Medias from '../app/medias/page' 
describe('Medias', () => {
  it('renders Medias page successfully', () => {
    render(<Medias />)
 
    const mainContent = screen.getByTestId('medias-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})