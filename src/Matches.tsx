import React from 'react';

const Matches = (props: any) => {
  const results = props.matchesData.map((match: any, index: number) => {
    return (
      <div key={index} className="match">
        <div className="match__club">{match.hostClub}</div>
        <div className="match__result">{match.hostGoals} - {match.guestGoals}</div>
        <div className="match__club match__club_right">{match.guestClub}</div>
      </div>
    )
  });

  return (
    <div className="matchesContainer">
      <h2>Matches</h2>
      <div className="matches">{results}</div>
    </div>
  );
}

export default Matches;
