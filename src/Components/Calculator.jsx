// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Calculator = ({ id, onDelete }) => {
  const [name, setName] = useState("Tally Calculator");
  const [nameValue, setNameValue] = useState("Tally Calculator");

  const [count, setCount] = useState(0);
  const [startValue, setStartValue] = useState("");

  const handleMinusClick = () => {
    setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  const handleStartInputChange = (event) => {
    setStartValue(event.target.value);
  };

  const handleStartValueSubmit = (event) => {
    event.preventDefault();
    setCount(Number(startValue));
    setStartValue("");
  };

  const handleNameValueChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(nameValue);
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      <input type="text" value={count} />

      <div className="funcGrp">
        <button className="functionBtn" onClick={handleMinusClick}>
          -
        </button>
        <button className="functionBtn" onClick={handlePlusClick}>
          +
        </button>
      </div>

      <button className="reset" onClick={handleResetClick}>
        Reset
      </button>
      <form className="set" onSubmit={handleStartValueSubmit}>
        <input
          placeholder="Start value"
          type="number"
          value={startValue}
          onChange={handleStartInputChange}
        />
        <button type="submit">Set</button>
      </form>

      <form className="set" onClick={handleNameChange}>
        <input
          placeholder="Set Name"
          type="text"
          onChange={handleNameValueChange}
        />
        <button type="submit">Set</button>
      </form>
      <button onClick={() => onDelete(id)}>Delete Calculator</button>
    </div>
  );
};

export default Calculator;
