import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import JokeList from '.';
import * as Fetchers from '../../fetchers.hooks';
import { render, screen } from '@testing-library/react';

const queryClient = new QueryClient();

const fakeJoke = {
  created_at: '"2020-01-05 13:42:19.897976"',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'vQ6Ds6g-T4me2Hbl7Gjc4w',
  updated_at: '2020-01-05 13:42:19.897976',
  url: 'Chuck Norris can run Windows 7 on a Commodore 64.',
  value: 'Commodore 64.',
  categories: [],
};

const fakeJokes = [
  {
    created_at: '"2020-01-05 13:42:19.897976"',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'qsDNqQTrTpiUc0wAeGMACA',
    updated_at: '2020-01-05 13:42:19.897976',
    url: 'https://api.chucknorris.io/jokes/vQ6Ds6g-T4me2Hbl7Gjc4w',
    value: 'Chuck Norris made Ferris work on his day off.',
    categories: [],
  },
  {
    created_at: '"2020-01-05 13:42:19.897976"',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'nYOVGEFyTSGWNJBILV6x8Q',
    updated_at: '2020-01-05 13:42:19.897976',
    url: 'https://api.chucknorris.io/jokes/vQ6Ds6g-T4me2Hbl7Gjc4w',
    value: 'Chuck Norris gouged out the "i" in team.',
    categories: [],
  },
  {
    created_at: '"2020-01-05 13:42:19.897976"',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'P-tx2WHeTrm2ccB9Hwu9GA',
    updated_at: '2020-01-05 13:42:19.897976',
    url: 'https://api.chucknorris.io/jokes/vQ6Ds6g-T4me2Hbl7Gjc4w',
    value: 'Chuck Norris has two speeds. Walk, and Kill.',
    categories: [],
  },
];

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Joke list', () => {
  it('loading random joke', () => {
    jest
      .spyOn(Fetchers, 'getRandomJoke')
      .mockReturnValue({ joke: 'tralalal', isLoadingJoke: true });

    render(<JokeList />, { wrapper });
    expect(screen.getByText(/Loading random joke.../i)).toBeVisible();
  });

  it('displays random joke', async () => {
    jest.spyOn(Fetchers, 'getRandomJoke').mockReturnValue({ joke: fakeJoke, isLoadingJoke: false });

    render(<JokeList />, { wrapper });
    const item = await screen.findAllByRole('joke-item');
    expect(item).toHaveLength(1);
    expect(await screen.getByText(fakeJoke.value)).toBeInTheDocument();
  });

  it('should show list of jokes when user enters value in search bar', async () => {
    jest.spyOn(Fetchers, 'useJokeQuery').mockReturnValue({
      jokes: fakeJokes,
      isLoadingJokes: false,
      refetch: (): Promise<any> => Promise.resolve({}),
    });

    render(<JokeList />, { wrapper });
    const jokeItems = await screen.findAllByRole('joke-item');
    expect(jokeItems).toHaveLength(fakeJokes.length);
  });

  it('loading jokes...', async () => {
    jest.spyOn(Fetchers, 'useJokeQuery').mockReturnValue({
      jokes: [],
      isLoadingJokes: true,
      refetch: (): Promise<any> => Promise.resolve({}),
    });
    render(<JokeList />, { wrapper });
    expect(screen.getByText(/Loading jokes.../i)).toBeVisible();
  });

  it('shows no results label', async () => {
    jest.spyOn(Fetchers, 'useJokeQuery').mockReturnValue({
      jokes: [],
      isLoadingJokes: false,
      refetch: (): Promise<any> => Promise.resolve({}),
    });
    render(<JokeList />, { wrapper });
    expect(await screen.findByText(/No results for searching critera/i)).toBeVisible();
  });
});
