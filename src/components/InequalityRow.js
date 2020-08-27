import React from "react";
import VerticalInequality from "./VerticalInequality";

export default function InequalityRow({ leadingRow, trailingRow }) {
  const items = leadingRow.map((num, idx) => {
    const ineq = (
      <VerticalInequality top={num} bottom={trailingRow[idx]} visible={true} />
    );
    if (idx === leadingRow.length - 1) {
      return ineq;
    }
    return (
      <>
        {ineq}
        <div className="inequalitySpacer">{">"}</div>
      </>
    );
  });
  return <div className="inequalityRow">{items}</div>;
}
