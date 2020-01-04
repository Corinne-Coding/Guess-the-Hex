import React from "react";

function Number(props) {
  const { number, level, setLevel } = props;

  return (
    <button
      style={{
        border: "none",
        outline: "none",
        fontSize: "12px",
        color: "#666666",
        cursor: "pointer",
        fontWeight: number === level && "bold"
      }}
      onClick={() => {
        setLevel(number);
      }}
    >
      {number}
    </button>
  );
}

export default Number;
