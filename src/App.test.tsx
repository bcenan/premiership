import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import userEvent from "@testing-library/user-event";

test('renders h1 content', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Premiership 2016\/2017/i);
  expect(linkElement).toBeInTheDocument();
});

test('render matches', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Matches/i);
  expect(linkElement).toBeInTheDocument();
});

test('render tables', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tables/i);
  expect(linkElement).toBeInTheDocument();
});

test('test change round menu', () => {
  const { getByTestId } = render(<App/>);
  const roundMenu = getByTestId('round-menu');
  userEvent.selectOptions(roundMenu, ['2']);
  expect(roundMenu.value).toBe('2');
});