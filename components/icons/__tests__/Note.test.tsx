/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoteIcon from '../Note';
describe('NoteIcon', () => {
  it('should render NoteIcon page successfully', () => {
    const { container } = render(<NoteIcon />)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  })

  it.each([
    ['should render NoteIcon with active icon when isActive is true', true],
    ['should not render NoteIcon with inactive color when isActive is false', false],
  ])('%s', (_: string, isActive: boolean) => {
    const { container } = render(<NoteIcon isActive={isActive} />)
    const path = container.querySelector('rect[fill="#49FF66"]');
    if (isActive) {
        expect(path).toBeInTheDocument();
    } else {
        expect(path).toBeNull();
    }
  });
});