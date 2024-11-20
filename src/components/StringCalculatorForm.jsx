import React, { useState } from "react";
import { addNumbers } from "../util/string-calculator";
import styles from "./StringCalculatorForm.module.css";

const StringCalculatorForm = () => {
  const [inputStr, setInputStr] = useState("");
  const [displayedNumber, setDisplayedNumber] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      setError("");
      setDisplayedNumber(addNumbers(inputStr));
    } catch (err) {
      setError(err.message);
      setDisplayedNumber(null);
    }
  };

  const handleReset = () => {
    setInputStr("");
    setDisplayedNumber(null);
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label htmlFor="stringInput">Enter Numbers:</label>
      <input
        id="stringInput"
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="e.g., 1,2\n3 or //;\n1;2"
      />
      <div className={styles.buttonContainer}>
        <button disabled={inputStr.length === 0} type="submit">
          Calculate
        </button>
        <button
          disabled={inputStr.length === 0}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      {displayedNumber !== null && (
        <p className={styles.result}>Result: {displayedNumber}</p>
      )}
      {error && <p className={styles.error}>Error: {error}</p>}
    </form>
  );
};

export default StringCalculatorForm;
