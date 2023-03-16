import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import axios from 'axios';

jest.mock('axios');

const fakeItem = {
  created_at: 'tralalal',
  icon_url: 'tralalal',
  id: 'tralalal',
  updated_at: 'tralalal',
  url: 'tralalal',
  value: 'tralalal',
  categories: [],
};

it('renders the landing page successfully', async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>,
  );

  (axios.get as jest.Mock).mockResolvedValue((url) => {
    if (url === 'https://api.chucknorris.io/jokes/random') {
      return Promise.resolve({ joke: fakeItem });
    }
  });

  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
  expect(screen.getByText(/Chuck Norris Jokes/)).toBeInTheDocument();
  expect(screen.getByTestId('loading_random')).toHaveTextContent('Loading random joke...');
  const text = await screen.findAllByRole('joke-item');
  expect(text.length).toEqual(1);
});
