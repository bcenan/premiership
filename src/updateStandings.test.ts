import updateStandings from './updateStandings';

test('test updateStandings', () => {
  const standings = {
    "Chelsea": {name: "Chelsea", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, form: [] },
    "Arsenal": {name: "Arsenal", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, form: [] },
    "Liverpool": {name: "Liverpool", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, form: [] },
    "West Ham United": {name: "West Ham United", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, form: [] },
  };

  const round = {
    "round":1,
    "matches":[
      {
          "Arsenal":3,
          "Liverpool":4
      },
      {
          "Chelsea":2,
          "West Ham United":1
      }
    ]
  };
  const updatedStandings = updateStandings(standings, round);
  const club = updatedStandings.Liverpool;

  expect(club.name).toBe('Liverpool');
  expect(club.won).toBe(1);
  expect(club.drawn).toBe(0);
  expect(club.lost).toBe(0);
  expect(club.gf).toBe(4);
  expect(club.ga).toBe(3);
  expect(club.gd).toBe(1);
  expect(club.points).toBe(3);
  expect(club.form).toEqual(['W']);
});

