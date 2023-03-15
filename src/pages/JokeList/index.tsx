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
  const debouncedQuery = useDebounce(query, 600);

  // fetchers
  const { joke, isLoadingJoke } = getRandomJoke({ enabled: !('jokes' in localStorage) && !query });
  const { jokes, isLoadingJokes, refetch } = useJokeQuery(debouncedQuery);

  // localStorage jokes
  const storedJokes = JSON.parse(localStorage.getItem('jokes') || '[]');

  useEffect(() => {
    if (jokes.length > 1) {
      localStorage.setItem('jokes', JSON.stringify(jokes.slice(0, 10).map((joke: IJoke) => joke)));
    }
  }, [jokes]);

  useEffect(() => {
    if (debouncedQuery) {
      refetch();
    }
  }, [debouncedQuery]);

  function renderContent() {
    if (!debouncedQuery && !('jokes' in localStorage)) {
      return isLoadingJoke ? <div>Loading random joke...</div> : <JokeItem item={joke as IJoke} />;
    }

    if (debouncedQuery) {
      return isLoadingJokes ? (
        <div>Loading jokes...</div>
      ) : jokes.length > 0 ? (
        jokes.map((joke: IJoke) => <JokeItem key={joke.id} item={joke} />)
      ) : (
        <div>No results for searching critera</div>
      );
    }

    if (!debouncedQuery && 'jokes' in localStorage) {
      return storedJokes.map((joke: IJoke) => <JokeItem key={joke.id} item={joke} />);
    }
  }

  return (
    <JokeListContainer>
      <SearchBarWrapper>
        <SearchBar setQuery={setQuery} />
      </SearchBarWrapper>
      <JokeListWrapper>{renderContent()}</JokeListWrapper>
    </JokeListContainer>
  );
};

export default JokeList;
