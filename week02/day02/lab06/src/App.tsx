import CountDownTimer from "./components/CountDownTimer";
import SimpleCalculator from "./components/SimpleCalculator";
import SimpleRandom from "./components/SimpleRandom";
import SimpleToDoList from "./components/SimpleToDoList";
import TemperatureConvert from "./components/TemperatureConvert";

function App() {
  return (
    <>
      <div className="calculator__wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-[10px]">SimpleCalculator</h1>
        <SimpleCalculator />
      </div>
      <br />
      <hr />
      <div className="calculator__wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-[10px]">CountDown Timer</h1>
        <CountDownTimer />
      </div>
      <br />
      <hr />
      <div className="calculator__wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-[10px]">Simple Random</h1>
        <SimpleRandom />
      </div>
      <br />
      <hr />
      <div className="calculator__wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-[10px]">Temperature Convert</h1>
        <TemperatureConvert />
      </div>
      <br />
      <hr />
      <div className="calculator__wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-[0px]">Simple ToDo List</h1>
        <SimpleToDoList />
      </div>
    </>
  );
}

export default App;
