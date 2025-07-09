import "./App.css";
import CarSelection from "./components/CarSelection";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <h1>Car Selection</h1>
      <CarSelection />
      <hr />
      <h1>Component Timer</h1>
      <Timer />
      <h1>Custom Hook - Clock Hook</h1>
      <Clock />
    </>
  );
}

export default App;
