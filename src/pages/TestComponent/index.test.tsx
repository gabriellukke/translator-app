import { render, screen } from '@testing-library/react';
import TestComponent from '.';

describe('TestComponent', () => {
  it('Should render a simple title', () => {
    render(<TestComponent />);

    const text = screen.getByText('Teste');
    expect(text).toBeInTheDocument();
  });
});
