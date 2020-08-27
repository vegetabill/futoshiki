import React from "react";

import NumberSquare from "./NumberSquare";
import Inequality from "./Inequality";

export default function NumberRow({ row }) {
  const elems = row.map((number, idx) => {
    const sq = <NumberSquare number={number} visible={true} />;
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
