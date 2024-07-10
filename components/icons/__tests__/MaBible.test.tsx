/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MaBibleIcon from '../MaBible';
describe('MaBibleIcon', () => {
  it('should render MaBibleIcon page successfully', () => {
    const { container } = render(<MaBibleIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render MaBibleIcon with active icon when isActive is true', true],
    ['should not render MaBibleIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<MaBibleIcon isActive={isActive} />)
    const path = container.querySelector('path[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });

});