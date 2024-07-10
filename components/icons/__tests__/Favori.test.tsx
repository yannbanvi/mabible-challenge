/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FavoriIcon from '../Favori';
describe('FavoriIcon', () => {
  it('should render FavoriIcon page successfully', () => {
    const { container } = render(<FavoriIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render FavoriIcon with active icon when isActive is true', true],
    ['should not render FavoriIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<FavoriIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});