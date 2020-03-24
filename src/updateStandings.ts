import { createMatch } from './match';

export default function updateStandings(standings: any, round: any) {
  return round.matches.reduce((oldStandings: any, roundMatch: any) => {
    const match = createMatch(roundMatch);

    return {
      ...oldStandings,
      [match.hostClub]: {
        name: oldStandings[match.hostClub].name,
        played: oldStandings[match.hostClub].played + 1,
        won: oldStandings[match.hostClub].won + (3 === match.hostPoints ? 1 : 0),
        drawn: oldStandings[match.hostClub].drawn + (1 === match.hostPoints ? 1 : 0),
        lost: oldStandings[match.hostClub].lost + (0 === match.hostPoints ? 1 : 0),
        gf: oldStandings[match.hostClub].gf + match.hostGoals,
        ga: oldStandings[match.hostClub].ga + match.guestGoals,
        gd: oldStandings[match.hostClub].gd + match.hostGoals - match.guestGoals,
        points: oldStandings[match.hostClub].points + match.hostPoints,
        form: updateForm(oldStandings[match.hostClub].form, match.hostPoints),
      },
      [match.guestClub]: {
        name: oldStandings[match.guestClub].name,
        played: oldStandings[match.guestClub].played + 1,
        won: oldStandings[match.guestClub].won + (3 === match.guestPoints ? 1 : 0),
        drawn: oldStandings[match.guestClub].drawn + (1 === match.guestPoints ? 1 : 0),
        lost: oldStandings[match.guestClub].lost + (0 === match.guestPoints ? 1 : 0),
        gf: oldStandings[match.guestClub].gf + match.guestGoals,
        ga: oldStandings[match.guestClub].ga + match.hostGoals,
        gd: oldStandings[match.guestClub].gd + match.guestGoals - match.hostGoals,
        points: oldStandings[match.guestClub].points + match.guestPoints,
        form: updateForm(oldStandings[match.guestClub].form, match.guestPoints),
      }
    };
  }, standings);
}

function updateForm(form: any, points: number) {
  const status = 3 === points ? 'W' : (1 === points ? 'D' : 'L');

  if (form.length >= 5) {
    form.shift();
  }

  form.push(status);
  return form;
}
