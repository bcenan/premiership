import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Matches from './Matches';
import { createMatch } from './match';
import Table from './Table';
import premiershipData from './premiership.json';
import getStandingsForSelectedRound from './getStandingsForSelectedRound';
import './App.css';

function App() {
  const numberOfRounds: number = premiershipData.length;
  const [selectedRound, setSelectedRound] = useState(numberOfRounds);
  const round: any = premiershipData.filter(item => item.round === selectedRound)[0];
  const matches: any[] = round.matches.map(createMatch);
  const standings: any = getStandingsForSelectedRound(premiershipData, selectedRound);

  function changeRound(value: number) {
    setSelectedRound(Number(value));
  }

  return (
    <div className="App">
      <Header numberOfRounds={numberOfRounds} selectedRound={selectedRound} onRoundChange={changeRound} />
      <Matches matchesData={matches} />
      <Table standings={standings} />
      <Footer />
    </div>
  );
}

export default App;
