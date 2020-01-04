import React from "react";

import Number from "./Number";

function Text(props) {
  const {
    text,
    color,
    size,
    uppercase,
    mb,
    mt,
    numberLevels,
    level,
    setLevel
  } = props;

  return (
    <div style={{ marginBottom: mb, marginTop: mt }}>
      <span
        style={{
          textTransform: uppercase ? "uppercase" : null,
          color: color,
          fontSize: size
        }}
      >
        {text}
      </span>
      {numberLevels &&
        numberLevels.map((number, index) => {
          return (
            <Number
              key={index}
              number={number}
              level={level}
              setLevel={setLevel}
            />
          );
        })}
    </div>
  );
}

export default Text;
