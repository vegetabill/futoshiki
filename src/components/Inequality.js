import React from "react";

export default function Inequality({ left, right, visible }) {
  const symbol = left > right ? ">" : "<";
  return (
    <>
      <div className="inequality">{symbol}</div>
    </>
  );
}
