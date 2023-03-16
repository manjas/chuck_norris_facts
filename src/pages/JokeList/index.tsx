import { useState, useEffect } from 'react';
// components
import SearchBar from './components/SearchBar';
import JokeItem from './components/JokeItem';
// hooks
import { getRandomJoke, useJokeQuery } from '../../fetchers.hooks';
import useDebounce from '../../hooks/useDebounce';
// types
import { IJoke } from '../../types';
// styles
import { JokeListContainer, JokeListWrapper, SearchBarWrapper } from './styled';

const JokeList = () => {
  const [query, setQuery] = useState('');
  const [previousSearches, setPreviousSearches] = useState<IJoke[]>([]);
  const debouncedQuery = useDebounce(query, 600);

  // fetchers
  const { joke, isLoadingJoke } = getRandomJoke({
    enabled: previousSearches?.length < 1 && !query,
  });
  const { jokes, isLoadingJokes, refetch } = useJokeQuery(debouncedQuery);

  useEffect(() => {
    if (jokes.length > 1) {
      setPreviousSearches(jokes.slice(0, 10));
    }
  }, [jokes]);

  useEffect(() => {
    if (debouncedQuery) {
      refetch();
    }
  }, [debouncedQuery]);

  function renderContent() {
    if (debouncedQuery) {
      return isLoadingJokes ? (
        <div data-testid='loading'>Loading jokes...</div>
      ) : jokes.length > 0 ? (
        jokes.map((joke: IJoke) => <JokeItem key={joke.id} item={joke} />)
      ) : (
        <div>No results for searching critera</div>
      );
    }

    if (!debouncedQuery && previousSearches.length > 0) {
      return previousSearches.map((joke: IJoke) => <JokeItem key={joke.id} item={joke} />);
    }

    return isLoadingJoke ? (
      <div data-testid='loading_random'>Loading random joke...</div>
    ) : (
      <JokeItem item={joke as IJoke} />
    );
  }

  return (
    <JokeListContainer>
      <SearchBarWrapper>
        <SearchBar setQuery={setQuery} />
      </SearchBarWrapper>
      <JokeListWrapper data-testid='joke-list'>{renderContent()}</JokeListWrapper>
    </JokeListContainer>
  );
};

export default JokeList;
