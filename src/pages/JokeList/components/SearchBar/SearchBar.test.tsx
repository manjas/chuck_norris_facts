import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

// component
import SearchBar from '.';

describe('SearchBar', () => {
  it('updates on change', () => {
    const setQuery = jest.fn((value) => {});

    const { getByRole } = render(<SearchBar setQuery={setQuery} />);

    const searchInput = getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(setQuery).toHaveBeenCalledWith('test');
  });
});
