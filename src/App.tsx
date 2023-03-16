import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import JokeList from './pages/JokeList';
import JokeDetails from './pages/JokeDetails';
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
        </Routes>
      </Container>
    </div>
  );
}

export default App;
