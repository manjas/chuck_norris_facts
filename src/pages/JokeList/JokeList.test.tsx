import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import JokeList from '.';

describe('JokeList', () => {
  beforeEach(() => {
    render(<JokeList />);
  });

  it('should have search input', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should have a header text', () => {
    expect(screen.getByText(/chuck norris jokes/i)).toBeInTheDocument();
  });
});
