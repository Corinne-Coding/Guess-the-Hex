import React from "react";

function Circle(props) {
  const { code, codeToFind } = props;

  return (
    <button
      onClick={() => {
        if (code === codeToFind) {
          console.log("WIN");
        }
      }}
      style={{
        backgroundColor: code,
        height: "76px",
        width: "76px",
        borderRadius: "38px",
        margin: "15px",
        border: "none",
        cursor: "pointer",
        outline: "none"
      }}
    />
  );
}

export default Circle;
