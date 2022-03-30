import ReceiptNum from "./components/ReceiptNum";
import ReceiptRow from "./components/ReceiptRow";
import InputLabel from "./components/InputLabel";
import "./App.css";
import PercentInput from "./components/PercentInput";
import OutputField from "./components/OutputField";
import personIcon from "./images/icon-person.svg";

import { useInputChange } from "./components/useInputChange";

function App() {
  const [receipt, handleReceiptChange] = useInputChange({
    bill: 123,
    customPercentage: 3,
    numberOfPeople: 5,
  });

  /*
  const staticBill = {
    bill: 123,
    customPercentage: 3,
    numberOfPeople: 5,
  };
  */

  function getTipAmount({ customPercentage, bill, numberOfPeople }) {
    const rawTipAmount = (bill / 100) * customPercentage / numberOfPeople
    if (isNaN(rawTipAmount)) return 0
    return rawTipAmount.toFixed(2);
  }

  function getTotal({ bill, numberOfPeople, customPercentage }) {
    // turn entries into an integer so you can calculate the values
    customPercentage = +customPercentage;
    bill = +bill;
    numberOfPeople = +numberOfPeople;

    const tipAmount = (bill / 100) * customPercentage;

    const rawCalc = (bill + tipAmount) / numberOfPeople;

    // Return amount rounded to 2 decimals
    if (isNaN(rawCalc)) return 0
    return rawCalc.toFixed(2);
  }

  function handleReset(e) {
    console.log(e.target.name);
  }

  return (
    <div className="text-gray-600 App bg-lightergrayishcyan">
      <div className="p-4 text-red-500 bg-black">
        <pre> {JSON.stringify(receipt, null, 2)} </pre>
      </div>

      <div className="container px-4 mx-auto">
        <ul className="py-10 text-2xl font-extrabold uppercase opacity-75 text-verydarkcyan">
          <li>s p l i</li>
          <li>t t e r</li>
        </ul>
        <div className="flex p-4 bg-white rounded-2xl">
          <div className="grid w-full gap-3 grid-cols">
            <InputLabel>Bill</InputLabel>
            <OutputField>
              <input
                type="number"
                name="bill"
                className="inline text-right bg-inherit"
                onChange={handleReceiptChange}
                placeholder="whats the bill?"
              />
            </OutputField>

            <InputLabel>Select Tip % </InputLabel>
            <div className="grid grid-cols-2 gap-4">
              <PercentInput>5%</PercentInput>
              <PercentInput>10% </PercentInput>
              <PercentInput>15%</PercentInput>
              <PercentInput>25% </PercentInput>
              <PercentInput>50%</PercentInput>
              <div className="p-2 text-2xl font-bold text-gray-500 rounded-md bg-slate-100">
                <input
                  type="number"
                  name="customPercentage"
                  placeholder="Custom"
                  className="w-full text-center bg-inherit"
                  onChange={handleReceiptChange}
                  min="1"
                  max="100"
                />
              </div>
            </div>

            <InputLabel>Number of People </InputLabel>
            <OutputField cName="grid grid-cols-2 ">
              <div className="hidden p-2">
                <img className="" src={personIcon} alt="" />
              </div>
              <div className="">
                <input
                  type="number"
                  name="numberOfPeople"
                  className="text-right bg-inherit"
                  onChange={handleReceiptChange}
                  placeholder="2.."
                />
              </div>
            </OutputField>
            <div className="grid grid-cols-2 gap-2 p-6 pt-10 rounded-lg bg-verydarkcyan">
              <ReceiptRow>
                Tip Amount <br></br>
                <span className="text-sm text-gray-400">/ person</span>
              </ReceiptRow>
              <OutputField cName="text-darkgrayishcyan">{getTipAmount(receipt)}</OutputField>
              <ReceiptRow>
                <div>Total </div>
                <span className="text-gray-400">/ person</span>
              </ReceiptRow>
              <OutputField cName="text-darkgrayishcyan">{getTotal(receipt)}</OutputField>

              <button
                className="w-full col-span-2 p-2 pt-4 text-xl font-bold uppercase rounded-md text-verydarkcyan bg-darkgrayishcyan"
                // dont change resetButton name this is dependant on resetting the form
                name="resetButton"
                onClick={handleReceiptChange}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution mt-4">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
