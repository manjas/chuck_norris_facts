import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JokeDetails from '.';

describe('JokeDetails', () => {
  it('displays the joke details', () => {
    const joke = {
      created_at: '"2020-01-05 13:42:19.897976"',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'vQ6Ds6g-T4me2Hbl7Gjc4w',
      updated_at: '2020-01-05 13:42:19.897976',
      url: 'https://api.chucknorris.io/jokes/vQ6Ds6g-T4me2Hbl7Gjc4w',
      value: 'Chunck Norris Joke from link state',
      categories: [],
    };

    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/details' }, { state: { joke } }]}
        initialIndex={1}
      >
        <JokeDetails />
      </MemoryRouter>,
    );

    expect(screen.getByRole('joke-details')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(joke.value)).toBeInTheDocument();
  });
});
