import InputLabel from "./components/InputLabel";
import "./App.css";
import PercentInput from "./components/PercentInput";

function App() {
  const PercentInputDefault = `bg-verydarkcyan rounded-md p-2 text-3xl font-bold text-white focus:bg-darkergrayishcyan focus:text-verydarkcyan `;

  return (
    <div className="text-gray-600 App bg-lightergrayishcyan">
      <div className="container mx-auto max-w-[375px] px-4">
        <ul className="py-8 text-2xl font-extrabold uppercase opacity-75 text-verydarkcyan">
          <li>s p l i</li>
          <li>t t e r</li>
        </ul>
        <div className="flex p-4 bg-white rounded-2xl">
          <div className="grid w-full grid-cols">
            <InputLabel>Bill</InputLabel>
            <div className="w-full p-3 text-2xl font-bold text-right bg-gray-100 rounded-lg text-verydarkcyan">
              <span className="text-left text-gray-400">$ </span>
              <span className="text-right">142.55</span>
            </div>
            <InputLabel>Select Tip % </InputLabel>
            <div className="grid grid-cols-2 gap-4">
              <PercentInput>5%</PercentInput>
              <PercentInput>10% </PercentInput>
              <PercentInput>15%</PercentInput>
              <PercentInput>25% </PercentInput>
              <PercentInput>50%</PercentInput>
              <div className="p-4 text-2xl font-bold bg-slate-100">Custom </div>
            </div>
            <InputLabel>Number of People </InputLabel>
            <div>Tip Amount / person </div>
            <div>Total / person Reset</div>
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
