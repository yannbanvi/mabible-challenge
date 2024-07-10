/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ThemeIcon from '../Theme'
describe('ThemeIcon', () => {
  it('renders ThemeIcon page successfully', () => {
    const { container } = render(<ThemeIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});