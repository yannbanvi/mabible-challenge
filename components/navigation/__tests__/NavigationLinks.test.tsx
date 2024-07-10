/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavigationLinks from '../NavigationLinks'
import { NavigationLinksProps } from '@/interfaces/UiProps';
describe('NavigationLinks', () => {
    const props: NavigationLinksProps = {
        navigationLinks: [{
            icon: <div data-testid="testicon"></div>,
            title: 'TestTitle',
            url: '/test',
            isActive: false
        }],
        title: '',
    };
  it('should render NavigationLinks successfully', () => {
    const { container } = render(<NavigationLinks  {...props} />);
    const icon = container.querySelectorAll('div[data-testid="testicon"]');
    const link = container.querySelectorAll('a[aria-label="TestTitle"]');
    const text = container.querySelectorAll('p');
    expect(icon).toHaveLength(1);
    expect(link).toHaveLength(1);
    expect(text).toHaveLength(1);
    expect(screen.getByText('TestTitle')).toBeInTheDocument();
  });

  it('should render NavigationLinks with title when title is not empty', () => {
    props.title = 'Test Title';
    const { container } = render(<NavigationLinks  {...props} />);
    screen.logTestingPlaygroundURL();
    const icon = container.querySelectorAll('div[data-testid="testicon"]');
    const link = container.querySelectorAll('a[aria-label="TestTitle"]');
    const text = container.querySelectorAll('p');
    expect(icon).toHaveLength(1);
    expect(link).toHaveLength(1);
    expect(text).toHaveLength(2);
    expect(screen.getByText('TestTitle')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});