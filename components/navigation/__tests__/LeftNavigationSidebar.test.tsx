/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LeftNavigationSidebar from '../LeftNavigationSidebar'
describe('LeftNavigationSidebar', () => {

  it('should render LeftNavigationSidebar successfully', () => {
    const { container } = render(<LeftNavigationSidebar />);
    expect(container).toMatchSnapshot();
  });
});