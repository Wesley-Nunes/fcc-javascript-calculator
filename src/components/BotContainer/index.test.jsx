import React from 'react';
import { render, screen } from '@testing-library/react';
import BotContainer from './index';

test('should render three buttons with text values', () => {
  render(<BotContainer />);

  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByText('.')).toBeInTheDocument();
  expect(screen.getByText('=')).toBeInTheDocument();
});
