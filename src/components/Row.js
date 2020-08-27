import React from "react";

import Square from "./Square";
import Inequality from "./Inequality";

export default function Row({ row }) {
  const elems = row.map((number, idx) => {
    const sq = <Square number={number} visible={number !== 2} />;
    if (idx !== row.length - 1) {
      return (
        <>
          {sq}
          <Inequality left={number} right={row[idx + 1]} visible={true} />
        </>
      );
    }
    return sq;
  });

  return <div className="row">{elems}</div>;
}
