import Board from "./components/Board";
import { createBoard } from "./model/board";
import Settings from "./components/Settings";
import React, { useEffect, useState, createRef } from "react";
import "./App.css";

const SIZE = 4;

function App() {
  const [board, setBoard] = useState();

  useEffect(() => {
    setBoard(createBoard(SIZE));
  }, []);

  return (
    <div>
      <Settings />
      {board && <Board board={board} />}
    </div>
  );
}

export default App;
