import React from "react";
import StringCalculatorForm from "../components/StringCalculatorForm";
import styles from "./StringCalculator.module.css";

const StringCalculator = () => {
  return (
    <div className={styles.container}>
      <h1>String Calculator </h1>
      <StringCalculatorForm />
    </div>
  );
};

export default StringCalculator;
