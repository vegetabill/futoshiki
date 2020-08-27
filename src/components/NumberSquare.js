import React from "react";

export default function NumberSquare({ number, visible }) {
  return (
    <div className="square">
      <span className={visible ? "number" : "number--hidden"}>{number}</span>
    </div>
  );
}
