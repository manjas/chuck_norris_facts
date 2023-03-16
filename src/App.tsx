import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JokeList from './pages/JokeList';
import JokeDetails from './pages/JokeDetails';
import PageNotFound from './pages/PageNotFound';
import { Container, HeaderLabel } from './styled';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div>
      <HeaderLabel data-testid='side-title'>Chuck Norris Jokes</HeaderLabel>
      <Container>
        <Routes>
          <Route path='/' element={<JokeList />} />
          <Route path='/details/:jokeId' element={<JokeDetails />} />
          <Route path='/404' element={<PageNotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
