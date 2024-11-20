import StringCalculator from "./pages/StringCalculator";
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
