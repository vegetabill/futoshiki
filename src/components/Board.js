import React from "react";
import Row from "./Row";

export default function Board({ board }) {
  return (
    <div className="board">
      {board.rows.map((row, idx) => (
        <Row key={idx} row={row} />
      ))}
    </div>
  );
}
