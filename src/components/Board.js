import React from "react";
import NumberRow from "./NumberRow";
import InequalityRow from "./InequalityRow";

export default function Board({ board }) {
  const allRows = board.rows.map((row, idx) => {
    const numRow = <NumberRow key={idx} row={row} />;

    if (idx !== board.rows.length - 1) {
      return (
        <>
          {numRow}
          <InequalityRow leadingRow={row} trailingRow={board.rows[idx + 1]} />
        </>
      );
    }

    return numRow;
  });
  return <div className="board">{allRows}</div>;
}
