import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import JokeItem from '.';

const queryClient = new QueryClient();

const fakeItem = {
  created_at: '"2020-01-05 13:42:19.897976"',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'vQ6Ds6g-T4me2Hbl7Gjc4w',
  updated_at: '2020-01-05 13:42:19.897976',
  url: 'https://api.chucknorris.io/jokes/vQ6Ds6g-T4me2Hbl7Gjc4w',
  value: 'Some Chunck Norris Joke',
  categories: [],
};

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

describe('JokeItem', () => {
  it('shows joke item properlly', () => {
    render(<JokeItem item={fakeItem} />, { wrapper });
    const itemText = screen.getByRole('joke-item').textContent;
    expect(itemText).toBe(fakeItem.value);
  });
});
