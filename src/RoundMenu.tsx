import React from 'react';

const RoundMenu = (props: any) => {
  let { rounds, selectedRound, onRoundChange } = props;
  const menuOptions = [];

  for (let i = rounds; i > 0; i--) {
    menuOptions.push(<option key={i} value={i}>{i}</option>);
  }

  function onChange(e: any) {
    onRoundChange(e.target.value);
  }

  return (
    <select
      data-testid="round-menu"
      value={selectedRound}
      onChange={onChange}
      className="round-menu">
      {menuOptions}
    </select>
  );
}

export default RoundMenu;