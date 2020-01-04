import React, { useState, useEffect } from "react";

import Circle from "./Circle";
import HexCode from "./HexCode";

function App() {
  const [difficulty, setDifficulty] = useState(2);
  const [codes, setCodes] = useState(null);
  const [codeToFind, setCodeToFind] = useState(null);

  useEffect(() => {
    const hexCodesGenerator = () => {
      const arr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ];

      let codes = [];
      for (let i = 0; i < difficulty; i++) {
        let hex = "#";
        for (let j = 0; j < 6; j++) {
          let randomNumber = Math.floor(Math.random() * arr.length);
          hex = hex + arr[randomNumber];
        }
        codes.push(hex);
      }
      setCodes(codes);

      let randomNumber = Math.floor(Math.random() * codes.length);
      setCodeToFind(randomNumber);

      console.log(randomNumber);
      console.log(codes);
    };

    hexCodesGenerator();
  }, []);

  return (
    <div className="App">
      <p className="upperText">What the Hex ?</p>
      {codes && <HexCode codes={codes} codeToFind={codeToFind} />}
      <div className="row">
        {codes &&
          codes.map((code, index) => {
            return <Circle key={index} code={code} />;
          })}
      </div>
    </div>
  );
}

export default App;
