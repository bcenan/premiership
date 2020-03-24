import React from 'react';

const TableBody = (props: any) => {
  function renderForm(form: string[]) {
    return form.map((item, index) =>
      <li
        key={index}
        className={"form__item " + (item === 'W' ? 'form__item_win': (item === 'L' ? 'form__item_lose' : ''))}
      >{item}</li>
    );
  }

  const clubs = Object.values(props.standings).map((club: any, index: number) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td className="club">{club['name']}</td>
        <td>{club['played']}</td>
        <td>{club['won']}</td>
        <td>{club['drawn']}</td>
        <td>{club['lost']}</td>
        <td>{club['gf']}</td>
        <td>{club['ga']}</td>
        <td>{club['gd']}</td>
        <td className="points">{club['points']}</td>
        <td>
          <ul className="form">{renderForm(club['form'])}</ul>
        </td>
      </tr>
    );
  })

  return (
    <tbody>{clubs}</tbody>
  );
}

export default TableBody;
