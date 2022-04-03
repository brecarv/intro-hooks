import React, { useEffect, useState } from "react";
import "./IfoodCounter.css";

export default function IfoodCounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

  useEffect(() => {
    document.getElementById("moeda").innerHTML = 2.0 * value;
  });

  function up() {
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active");
  }

  function down() {
    if (value <= 1) {
      setButtonStyle("counter-button-minus-desactive");
    }

    if (value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className="countex-wrapper">
      <button
        className={buttonStyle}
        //onClick={() => (value > 0 ? setValue(value - 1) : setValue(value))}
        onClick={down}
      >
        -
      </button>
      <p>{value}</p>
      <button
        className="counter-button-plus-active"
        //onClick={() => setValue(value + 1)}
        onClick={up}
      >
        +
      </button>
      <button id="moeda">2.5</button>
    </div>
  );
}
