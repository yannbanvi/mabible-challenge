/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AvatarIcon from '../Avatar'
describe('AvatarIcon', () => {
  it('renders AvatarIcon page successfully', () => {
    const { container } = render(<AvatarIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});