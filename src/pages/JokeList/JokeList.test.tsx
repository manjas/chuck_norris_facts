import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JokeItem from './components/JokeItem';
import SearchBar from './components/SearchBar';
// component
import JokeList from '.';

import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

jest.mock('axios');
const queryClient = new QueryClient();

const fakeItems = [
  {
    created_at: 'tralalal',
    icon_url: 'tralalal',
    id: 'tralalal',
    updated_at: 'tralalal',
    url: 'tralalal',
    value: 'tralalal',
    categories: [],
  },
  {
    created_at: 'tralalal2',
    icon_url: 'tralalal2',
    id: 'tralalal2',
    updated_at: 'tralalal2',
    url: 'tralalal2',
    value: 'tralalal2',
    categories: [],
  },
  {
    created_at: 'tralalal3',
    icon_url: 'tralalal3',
    id: 'tralalal3',
    updated_at: 'tralalal3',
    url: 'tralalal3',
    value: 'tralalal3',
    categories: [],
  },
];

const fakeItem = {
  created_at: 'tralalal',
  icon_url: 'tralalal',
  id: 'tralalal',
  updated_at: 'tralalal',
  url: 'tralalal',
  value: 'tralalal',
  categories: [],
};

describe('JokeList', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <JokeList />
      </QueryClientProvider>,
    );
  });

  it('should show search bar', () => {
    const searchInput = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'music' } });
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe('music');
  });

  it('should show list of jokes when user enters value in search bar', async () => {
    const searchInput = screen.getByRole('textbox');
    const searchingQuery = 'music';
    fireEvent.change(searchInput, { target: { value: searchingQuery } });
    (axios.get as jest.Mock).mockResolvedValue((url) => {
      if (url === `https://api.chucknorris.io/jokes/search?query=${searchingQuery}`) {
        return Promise.resolve({ jokes: fakeItems });
      }
    });
    const jokeItems = await screen.findAllByRole('joke-item');
    expect(jokeItems.length).toEqual(fakeItems.length);
  });

  it('show no results', async () => {
    const searchInput = screen.getByRole('textbox');
    const searchingQuery = 'music';
    fireEvent.change(searchInput, { target: { value: searchingQuery } });
    (axios.get as jest.Mock).mockResolvedValue((url) => {
      if (url === `https://api.chucknorris.io/jokes/search?query=${searchingQuery}`) {
        return Promise.resolve({ jokes: [] });
      }
    });
    const noResults = await screen.getByText(/no results for searching critera/i);
    expect(noResults).toBeInTheDocument();
  });
});
