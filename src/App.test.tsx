import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

it('renders the landing page successfully', async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>,
  );

  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
  expect(screen.getByText(/Chuck Norris Jokes/)).toBeInTheDocument();
  const jokeItems = await screen.findAllByRole('joke-item');
  expect(jokeItems.length).toEqual(1);
});
