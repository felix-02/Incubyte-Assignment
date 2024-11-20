import React, { useState } from "react";
import { addNumbers } from "../util/string-calculator";

const StringCalculatorForm = () => {
  const [inputStr, setInputStr] = useState("");
  const [displayedNumber, setDisplayedNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisplayedNumber(addNumbers(inputStr));
  };

  return (
    <>
      {displayedNumber && <p>Result: {displayedNumber}</p>}
      <form onSubmit={handleFormSubmit}>
        <input value={inputStr} onChange={(e) => setInputStr(e.target.value)} />
        <button disabled={inputStr.length === 0} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default StringCalculatorForm;
