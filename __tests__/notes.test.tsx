/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Notes from '../app/notes/page' 
describe('Notes', () => {
  it('renders Notes page successfully', () => {
    render(<Notes />)
 
    const mainContent = screen.getByTestId('notes-page')
 
    expect(mainContent).toBeInTheDocument()
  })
})