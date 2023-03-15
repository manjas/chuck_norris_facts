import { useQuery } from 'react-query';
import axios from 'axios';
import { IJoke } from './types';

export const RANDOM_JOKE = 'random-joke';
export const GET_JOKE = 'get-joke';

export function getRandomJoke({ enabled }: { enabled: boolean }) {
  const { data, isLoading } = useQuery(
    [RANDOM_JOKE],
    () => axios.get<IJoke>('https://api.chucknorris.io/jokes/random'),
    {
      select: ({ data }) => data,
      enabled: enabled,
    },
  );
  return { joke: data ?? '', isLoadingJoke: isLoading };
}

export function useJokeQuery(query: string) {
  const { data, isLoading, refetch } = useQuery(
    [GET_JOKE],
    () => axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`),
    {
      select: ({ data }) =>
        data.result.map((item: IJoke) => {
          return item;
        }),
      enabled: !!query,
    },
  );
  return { jokes: data ?? [], isLoadingJokes: isLoading, refetch };
}
