import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkCTA from '../link-cta';

describe('LinkCTA', () => {
  it('renders the text prop', () => {
    const text = 'Click me!';
    render(<LinkCTA href="/" icon="check" text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders the icon prop', () => {
    const icon = 'check';
    render(<LinkCTA href="/" icon={icon} text="Click me!" />);
    expect(screen.getByTestId('icon')).toHaveAttribute('icon', icon);
  });

  it('renders the href prop', () => {
    const href = '/some-page';
    render(<LinkCTA href={href} icon="check" text="Click me!" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});