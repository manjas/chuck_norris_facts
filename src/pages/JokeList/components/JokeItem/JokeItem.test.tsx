import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import JokeItem from '.';

const fakeItem = {
  created_at: 'tralalal',
  icon_url: 'tralalal',
  id: 'tralalal',
  updated_at: 'tralalal',
  url: 'tralalal',
  value: 'tralalal',
  categories: [],
};

describe('JokeItem', () => {
  it('opens details page', () => {
    // const { getByRole } = render(<JokeItem item={fakeItem} />);
    // fireEvent.click(getByRole('joke-item'));
    // expect(global.window.location.pathname).toContain('/details');
  });
});
