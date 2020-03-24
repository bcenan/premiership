import { createMatch } from './match';

test('test createMatches', () => {
  const matchRaw = {
    'Burnley': 0,
    'Swansea': 1,
  };

  const match = createMatch(matchRaw);

  expect(match.hostClub).toBe('Burnley');
  expect(match.guestClub).toBe('Swansea');
  expect(match.hostGoals).toBe(0);
  expect(match.guestGoals).toBe(1);
  expect(match.hostPoints).toBe(0);
  expect(match.guestPoints).toBe(3);
});
