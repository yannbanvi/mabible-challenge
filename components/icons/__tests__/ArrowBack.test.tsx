/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ArrowBackIcon from '../ArrowBack'
describe('ArrowBackIcon', () => {
  it('should render ArrowBackIcon successfully', () => {
    const { container } = render(<ArrowBackIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
});