import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionsContainerTwo from './index';

test('should render three buttons with text values', () => {
  render(<ActionsContainerTwo />);

  expect(screen.getByText('-')).toBeInTheDocument();
  expect(screen.getByText('*')).toBeInTheDocument();
  expect(screen.getByText('/')).toBeInTheDocument();
});
