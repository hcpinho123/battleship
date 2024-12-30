import { Player } from "../types/PlayerType.type";
import { TurnType } from "../types/TurnType";

export function Intermidiate(props: {
  currentPlayer: Player;
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  showIntermidiate: boolean;
  setShowIntermidiate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          all: "unset",
          cursor: "pointer",
          border: "0.5px solid white",
          width: "fit-content",
          padding: "0 2px",
          fontSize: "13px",
        }}
        onClick={() => {
          props.setTurn("p2 placeships");
          props.setShowIntermidiate(false);

          if (
            props.currentPlayer === "player1" &&
            props.turn === "p2 placeships"
          ) {
            props.setTurn("p1 turn");
          }
          if (props.currentPlayer === "player2" && props.turn === "p1 turn") {
            props.setTurn("p2 turn");
          }
          if (props.currentPlayer === "player1" && props.turn === "p2 turn") {
            props.setTurn("p1 turn");
          }
        }}
      >
        Start Turn
      </button>
    </div>
  );
}
