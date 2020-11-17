import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('login', () => {
  const { login } = handleLoginSubmit();
  expect (login).toHaveBeenCalledTimes(1);
});

test('TournamentConfig', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TournamentConfig/i);
  expect(linkElement).toBeInTheDocument();
});