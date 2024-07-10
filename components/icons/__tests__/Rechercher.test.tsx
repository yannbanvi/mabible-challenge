/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RechercheIcon from '../Recherche'
describe('RechercheIcon', () => {
  it('renders RechercheIcon page successfully', () => {
    const { container } = render(<RechercheIcon />)
    const svg = container.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
    expect(container).toMatchSnapshot();
  })
});