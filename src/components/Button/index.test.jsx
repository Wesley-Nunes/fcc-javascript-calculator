import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

test('should render a button', () => {
  render(<Button />);

  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});
