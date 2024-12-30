import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import GameBoard from "./interfaces/GameBoard.interface";
import generateShips from "./lib/generateShips.lib";
import generateTiles from "./lib/generateTiles.lib";

const gameBoard: GameBoard = {
  player1: {
    placedShips: false,
    defense: generateTiles(),
    attack: generateTiles(),
    ships: generateShips(),
  },
  player2: {
    placedShips: false,
    defense: generateTiles(),
    attack: generateTiles(),
    ships: generateShips(),
  },
};

function App() {
  const [board, setBoard] = useState<GameBoard>(gameBoard);

  return (
    <>
      <Game setBoard={setBoard} board={board} />
    </>
  );
}

export default App;
