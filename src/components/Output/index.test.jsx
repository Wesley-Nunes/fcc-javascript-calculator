import React from 'react';
import { render, screen } from '@testing-library/react';
import Output from './index';

describe('Output', () => {
  const defaultValue = '0';

  render(<Output expression={defaultValue} fontSize="4.4rem" fontColor="white" />);
  test("Output component render '0'(defaultValue)", () => {
    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });
});
