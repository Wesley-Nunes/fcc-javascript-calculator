import React from 'react';
import { render, screen } from '@testing-library/react';
import NumbersContainer from './index';

test('should render nine buttons with text values of arr number', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  render(<NumbersContainer />);
  numbers.forEach((n) => expect(screen.getByText(n)).toBeInTheDocument());
});
