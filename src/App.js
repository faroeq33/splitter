import ReceiptNum from "./components/ReceiptNum";
import ReceiptRow from "./components/ReceiptRow";
import InputLabel from "./components/InputLabel";
import "./App.css";
import PercentInput from "./components/PercentInput";
import OutputField from "./components/OutputField";
import personIcon from "./images/icon-person.svg";

import { useInputChange } from "./components/useInputChange";

function App() {
  const [receipt, handleReceiptChange] = useInputChange();

  return (
    <div className="text-gray-600 App bg-lightergrayishcyan">
      {JSON.stringify(receipt)}
      <div className="container mx-auto max-w-[375px] px-4">
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
                Custom
              </div>
            </div>

            <InputLabel>Number of People </InputLabel>
            <OutputField cName="grid grid-cols-2">
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
              <ReceiptNum>${receipt.tipPerPerson | 0}</ReceiptNum>
              <ReceiptRow>
                <div>Total </div>
                <span className="text-gray-400">/ person</span>
              </ReceiptRow>

              <ReceiptNum>
                {/* receipt divided by numberOfPeople otherwhise calculate nothing  */}
                ${(receipt.bill / receipt.numberOfPeople) | ""}
              </ReceiptNum>

              <button className="w-full col-span-2 p-2 pt-4 text-xl font-bold uppercase rounded-md text-verydarkcyan bg-darkgrayishcyan">
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
