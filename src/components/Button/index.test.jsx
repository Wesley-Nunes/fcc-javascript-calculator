import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  render(<Button />);
  const element = screen.getByRole('button');

  test('Render Button component', () => {
    expect(element).toBeInTheDocument();
  });
});
