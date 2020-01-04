import React from "react";

function Circle(props) {
  const { code } = props;
  console.log("Circle ==> " + code);

  return (
    <div style={{ backgroundColor: code, height: "76px", width: "76px", borderRadius : "38px", margin : "15px"}} />
  );
}

export default Circle;
