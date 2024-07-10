/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MediaIcon from '../Media';
describe('MediaIcon', () => {
  it('should render MediaIcon page successfully', () => {
    const { container } = render(<MediaIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render MediaIcon with active icon when isActive is true', true],
    ['should not render MediaIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<MediaIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});