import StringCalculator from "./page/StringCalculator";
import { stringCalculatorTests } from "./tests/string-calculator-tests";
import "./App.css";

function App() {
  stringCalculatorTests();
  return (
    <>
      <StringCalculator />
    </>
  );
}

export default App;
