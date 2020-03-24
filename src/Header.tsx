import React from 'react';
import logo from './logo96.png';
import RoundMenu from './RoundMenu';

const Header = (props: any) => {
  let {numberOfRounds, selectedRound, onRoundChange} = props;

  return (
    <div id="header">
      <img id="logo" src={logo} alt="logo" />
      <div className="header-content">
        <div className="header-content__item">
          <h1>Premiership 2016/2017 - Round:</h1>
        </div>
        <div className="header-content__item">
          <RoundMenu rounds={numberOfRounds} selectedRound={selectedRound} onRoundChange={onRoundChange} />
        </div>
      </div>
    </div>
  );
}

export default Header;
