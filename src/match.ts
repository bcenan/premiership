export function createMatch(match: any) {
  const [hostClub, guestClub] = Object.keys(match);
  const [hostGoals, guestGoals] = Object.values(match);

  return {
    hostClub,
    guestClub,
    hostGoals,
    guestGoals,
    hostPoints: getHostPoints(hostGoals, guestGoals),
    guestPoints: getGuestPoints(hostGoals, guestGoals),
  };
}

function getHostPoints(hostGoals: number, guestGoals: number): number {
  if (hostGoals === guestGoals) {
    return 1;
  }

  if (hostGoals < guestGoals) {
    return 0;
  }

  return 3;
}

function getGuestPoints(hostGoals: number, guestGoals: number): number {
  if (hostGoals === guestGoals) {
    return 1;
  }

  if (hostGoals < guestGoals) {
    return 3;
  }

  return 0;
}