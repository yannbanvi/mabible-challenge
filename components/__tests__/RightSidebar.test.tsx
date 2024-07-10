/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RightSidebar from '../RightSidebar'
describe('RightSidebar', () => {

  it('should render RightSidebar successfully', () => {
    const { container } = render(<RightSidebar />);
    expect(container).toMatchSnapshot();
  });
});