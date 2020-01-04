import React from "react";

function HexCode(props) {
  const { codes, codeToFind } = props;

  return (
    <div className="hex-code">
      <span>{codes[codeToFind]}</span>
    </div>
  );
}

export default HexCode;
