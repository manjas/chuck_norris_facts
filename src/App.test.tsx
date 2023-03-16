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

test('renders the landing page', async () => {
  const queryClient = new QueryClient();
  (axios.get as jest.Mock).mockResolvedValue((url) => {
    if (url === 'https://api.chucknorris.io/jokes/random') {
      return Promise.resolve({ data: fakeItem });
    }
  });
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>,
  );

  expect(screen.getByTestId('loading_random')).toHaveTextContent('Loading random joke...');
  const randomJoke = await screen.findByRole('joke-item');
  expect(randomJoke).toBeInTheDocument();
});
