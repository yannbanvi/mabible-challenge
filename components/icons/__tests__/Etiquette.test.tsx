/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EtiquetteIcon from '../Etiquette';
describe('EtiquetteIcon', () => {
  it('should render EtiquetteIcon page successfully', () => {
    const { container } = render(<EtiquetteIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render EtiquetteIcon with active icon when isActive is true', true],
    ['should not render EtiquetteIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<EtiquetteIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});