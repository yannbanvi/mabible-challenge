/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DotsIcon from '../Dots'
describe('DotsIcon', () => {
  it('renders DotsIcon page successfully', () => {
    const { container } = render(<DotsIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});