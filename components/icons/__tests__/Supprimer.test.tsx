/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SupprimerIcon from '../Supprimer'
describe('SupprimerIcon', () => {
  it('renders SupprimerIcon page successfully', () => {
    const { container } = render(<SupprimerIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});