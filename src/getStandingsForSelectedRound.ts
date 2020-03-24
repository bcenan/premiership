import sortStandings from './sortStandings';
import updateStandings from './updateStandings';

export default function getStandingsForSelectedRound(premiershipData: any[], selectedRound: number) {
  const rounds = premiershipData.filter(round => round.round <= selectedRound);
  const standings = createInitialStandings(premiershipData[0]);
  const updatedStandings = rounds.reduce(updateStandings, standings);

  return sortStandings(updatedStandings);
}

function createInitialStandings(firstRound: any) {
  return firstRound.matches.reduce((clubs: any, match: any) => {
    return {
      ...clubs,
      [Object.keys(match)[0]]: { name: Object.keys(match)[0], played: 0, won: 0, drawn: 0, lost: 0, gf:0, ga:0, gd:0, points: 0, form: []},
      [Object.keys(match)[1]]: { name: Object.keys(match)[1], played: 0, won: 0, drawn: 0, lost: 0, gf:0, ga:0, gd:0, points: 0, form: []},
    };
  }, {});
}
