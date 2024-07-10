/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomeIcon from '../Home';
describe('HomeIcon', () => {
  it('should render HomeIcon page successfully', () => {
    const { container } = render(<HomeIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render HomeIcon with active icon when isActive is true', true],
    ['should not render HomeIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<HomeIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});