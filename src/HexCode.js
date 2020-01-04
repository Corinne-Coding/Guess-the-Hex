import React from "react";

function HexCode(props) {
  const {  codeToFind } = props;

  return (
    <div className="hex-code">
      <span>{codeToFind}</span>
    </div>
  );
}

export default HexCode;
