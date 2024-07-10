/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotePlaceholder from '../NotePlaceholder'
describe('NotePlaceholder', () => {
  it('renders NotePlaceholder page successfully', () => {
    const { container } = render(<NotePlaceholder />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});