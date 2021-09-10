import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  render(<Button />);
  const element = screen.getByRole('button');

  test('Button component', () => {
    expect(element).toBeInTheDocument();
  });

  test('Button component is enable', () => {
    expect(element).toBeEnabled();
  });

  test('Calls onClick prop when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick()} />);
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
