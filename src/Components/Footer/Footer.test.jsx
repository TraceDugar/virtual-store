import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders as expected', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent('T. Dugar 2023');
    expect(footer).toBeInTheDocument();
  });
});
