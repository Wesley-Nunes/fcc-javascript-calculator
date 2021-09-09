import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionsContainerOne from './index';

test('should render four buttons with text values', () => {
  render(<ActionsContainerOne />);

  expect(screen.getByText('C')).toBeInTheDocument();
  expect(screen.getByText('+/-')).toBeInTheDocument();
  expect(screen.getByText('%')).toBeInTheDocument();
  expect(screen.getByText('+')).toBeInTheDocument();
});
