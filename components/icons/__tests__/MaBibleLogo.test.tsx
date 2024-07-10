/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MaBibleIcon from '../MaBibleLogo'
describe('MaBibleIcon', () => {
  it('renders MaBibleIcon page successfully', () => {
    const { container } = render(<MaBibleIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});