/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavLink from '../NavLink'
import { NavLinkProps } from '@/interfaces/UiProps';
describe('NavLink', () => {
    const props: NavLinkProps = {
        icon: <div data-testid="testicon"></div>,
        title: 'TestTitle',
        url: '/test',
        isActive: false
    };
  it('should render NavLink successfully', () => {
    const { container } = render(<NavLink  {...props} />);
    const icon = container.querySelector('div[data-testid="testicon"]');
    const link = container.querySelector('a[aria-label="TestTitle"]');
    expect(icon).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute('href')).toBe('/test');
    expect(screen.getByText('TestTitle')).toBeInTheDocument();
  })

  it('should render NavLink with active style when isActive is true', () => {
    props.isActive = true;
    const { container } = render(<NavLink  {...props} />);
    screen.logTestingPlaygroundURL();
    const icon = container.querySelector('div[data-testid="testicon"]');
    const link = container.querySelector('a[aria-label="TestTitle"]');
    expect(icon).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute('href')).toBe('/test');
    expect(screen.getByText('TestTitle')).toBeInTheDocument();
  })
});