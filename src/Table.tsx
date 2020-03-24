import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = (props: any) => {
  return (
    <div>
      <h2>Tables</h2>
      <div className="table-container">
        <table className="table">
          <TableHeader />
          <TableBody standings={props.standings} />
        </table>
      </div>
    </div>
  );
}

export default Table;
