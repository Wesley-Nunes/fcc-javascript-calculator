import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
