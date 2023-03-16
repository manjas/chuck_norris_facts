import { render, fireEvent } from '@testing-library/react';

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
