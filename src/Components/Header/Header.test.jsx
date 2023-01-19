import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders as expected', () => {
    render(<Header />);

    let footer = screen.getByTestId('header');

    expect(footer).toHaveTextContent('Store');
    expect(footer).toBeInTheDocument();
  });
});