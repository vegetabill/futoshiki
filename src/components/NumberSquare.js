import React from "react";

export default function NumberSquare({ number, visible }) {
  return (
    <div className="numberSquare">
      <span className={visible ? "digit" : "digit--hidden"}>{number}</span>
    </div>
  );
}
