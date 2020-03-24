export default function sortStandings(standings: any) {
  return Object.values(standings).sort((team1: any, team2: any) => {
    // ako 2 tima imaju isti broj bodova
    if (team1['points'] === team2['points']) {
      // ako dva tima imaju istu gol razliku
      if (team1['gd'] === team2['gd']) {
        // ako je jednak broj postignutih golova
        if (team1['gf'] === team2['gf']) {
          // sortiranje po nazivu
          return team1['name'] > team2['name'] ? 1 : -1;
        }

        return team1['gf'] < team2['gf'] ? 1 : -1;
      }

      return (team1['gd'] < team2['gd']) ? 1 : -1;
    }

    return (team1['points'] < team2['points']) ? 1 : -1;
  });
}
