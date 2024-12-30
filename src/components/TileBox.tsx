import { TileType } from "../types/TileType.enum";

export function TileBox(props: { tile: TileType }) {
  // Helper function to generate ball styles
  const ballStyle = (color: string) => ({
    width: "30px",
    height: "30px",
    backgroundColor: color,
    borderRadius: "50%",
    margin: "auto",
    border: "4px solid gray",
  });

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#AFEEEE",
        border: "2px solid gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.tile === TileType.HIT && <div style={ballStyle("red")}></div>}
      {props.tile === TileType.SHIP && <div style={ballStyle("yellow")}></div>}
      {props.tile === TileType.PLACING && (
        <div style={ballStyle("yellow")}></div>
      )}
      {props.tile === TileType.MISS && <div style={ballStyle("white")}></div>}
      {props.tile === TileType.TARGETING && (
        <div style={{ ...ballStyle("white"), position: "relative" }}>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "40px",
              fontWeight: "bold",
              color: "red",
            }}
          >
            X
          </span>
        </div>
      )}
    </div>
  );
}
