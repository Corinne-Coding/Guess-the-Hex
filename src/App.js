import React, { useState, useEffect } from "react";

import Circle from "./Circle";
import HexCode from "./HexCode";
import Text from "./Text";

function App() {
  // circles hex
  const [codes, setCodes] = useState(null);
  // displayed hex
  const [codeToFind, setCodeToFind] = useState(null);
  // difficulty
  const [level, setLevel] = useState(5);

  const hexCharacters = [
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

  const numberLevels = [2, 3, 4, 5, 6, 7, 8, 9, 10, 48];

  useEffect(() => {
    const hexCodesGenerator = () => {
      let codes = [];
      for (let i = 0; i < level; i++) {
        let hex = "#";
        for (let j = 0; j < 6; j++) {
          let randomNumber = Math.floor(Math.random() * hexCharacters.length);
          hex = hex + hexCharacters[randomNumber];
        }
        codes.push(hex);
      }
      setCodes(codes);

      let randomNumber = Math.floor(Math.random() * codes.length);
      setCodeToFind(codes[randomNumber]);

      console.log(randomNumber);
      console.log(codes);
    };

    hexCodesGenerator();
  }, [level]);

  return (
    <div>
      <Text
        text={"What the Hex ?"}
        color={"#DDDDDD"}
        size={16}
        uppercase={true}
        mb={50}
        mt={10}
      />
      {codes && <HexCode codeToFind={codeToFind} />}
      <div className="row">
        {codes &&
          codes.map((code, index) => {
            return <Circle key={index} code={code} codeToFind={codeToFind} />;
          })}
      </div>
      <div className="center">
        <Text
          text={"Guess the color"}
          color={"#666666"}
          size={20}
          uppercase={true}
          mb={60}
          mt={20}
        />
      </div>
      <div className="center">
        <Text
          text={"Difficulty : "}
          color={"#666666"}
          size={12}
          uppercase={true}
          mb={30}
          mt={0}
          numberLevels={numberLevels}
          level={level}
          setLevel={setLevel}
        />
      </div>
      <div className="center">
        <Text
          text={"© 2020 Corinne "}
          color={"#666666"}
          size={10}
          uppercase={false}
          mb={30}
          mt={0}
        />
      </div>
    </div>
  );
}

export default App;
