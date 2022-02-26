import InputLabel from "./components/InputLabel";
import "./App.css";

function App() {
  return (
    <div className="App bg-lightergrayishcyan text-gray-600">
      <div className="container mx-auto max-w-[375px] px-4">
        <ul className="uppercase text-2xl text-verydarkcyan font-extrabold opacity-75 py-8">
          <li>s p l i</li>
          <li>t t e r</li>
        </ul>
        <div className="flex bg-white rounded-2xl p-4">
          <div className="grid grid-cols w-full">
            <InputLabel>Bill</InputLabel>
            <div className="p-3 text-2xl bg-gray-100 rounded-lg text-right text-verydarkcyan font-bold w-full">
              <span className="text-gray-400 text-left">$ </span>
              <span className="text-right">142.55</span>
            </div>
            <InputLabel>Select Tip % </InputLabel>
            <div>5% 10% </div>
            <div>15% 25% </div>
            <div>50% Custom </div>
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
