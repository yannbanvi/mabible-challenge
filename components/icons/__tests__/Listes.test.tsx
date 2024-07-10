/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListesIcon from '../Listes';
describe('ListesIcon', () => {
  it('should render ListesIcon page successfully', () => {
    const { container } = render(<ListesIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render ListesIcon with active icon when isActive is true', true],
    ['should not render ListesIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<ListesIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});