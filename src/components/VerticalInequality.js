import React from "react";

export default function VerticalInequality({ top, bottom, visible }) {
  const symbol = top > bottom ? "⋁" : "⋀";
  return <div className="verticalInequality">{symbol}</div>;
}
