import sortStandings from './sortStandings';

test('test sortStandings without matches', () => {
  const standings = {
    'Liverpool': {name: 'Liverpool', gf:0, gd:0, points: 0},
    'Chelsea': {name: 'Chelsea', gf:0, gd:0, points: 0},
    'Burnley': {name: 'Burnley', gf:0, gd:0, points: 0},
    'Arsenal': {name: 'Arsenal', gf:0, gd:0, points: 0},
    'Southampton': {name: 'Southampton', gf:0, gd:0, points: 0},
  };

  const sortedStandings: any[] = sortStandings(standings);
  expect(sortedStandings[0].name).toBe('Arsenal');
  expect(sortedStandings[1].name).toBe('Burnley');
});

test('test sortStandings for different points', () => {
  const standings = {
    'Liverpool': {name: 'Liverpool', gf:0, gd:0, points: 3},
    'Chelsea': {name: 'Chelsea', gf:0, gd:0, points: 6},
    'Burnley': {name: 'Burnley', gf:0, gd:0, points: 4},
    'Arsenal': {name: 'Arsenal', gf:0, gd:0, points: 1},
    'Southampton': {name: 'Southampton', gf:0, gd:0, points: 0},
  };

  const sortedStandings: any[] = sortStandings(standings);
  expect(sortedStandings[0].name).toBe('Chelsea');
});

test('test sortStandings for same points and different gd', () => {
  const standings = {
    'Liverpool': {name: 'Liverpool', gf:0, gd:0, points: 6},
    'Arsenal': {name: 'Arsenal', gf:0, gd:3, points: 6},
    'Chelsea': {name: 'Chelsea', gf:0, gd:5, points: 6},
  };

  const sortedStandings: any[] = sortStandings(standings);
  expect(sortedStandings[0].name).toBe('Chelsea');
});

test('test sortStandings for same points, gd and different gf', () => {
  const standings = {
    'Liverpool': {name: 'Liverpool', gf:5, gd:3, points: 6},
    'Arsenal': {name: 'Arsenal', gf:6, gd:3, points: 6},
    'Chelsea': {name: 'Chelsea', gf:3, gd:3, points: 6},
  };

  const sortedStandings: any[] = sortStandings(standings);
  expect(sortedStandings[0].name).toBe('Arsenal');
});
