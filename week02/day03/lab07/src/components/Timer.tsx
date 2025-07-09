import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState<number>(10);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;

    if (isRunning && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      alert("Time's up");
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
    }
  };

  return (
    <div className="countdown__container">
      <p>Countdown form {time}</p>
      <button onClick={handleStart}>Start Countdown</button>
    </div>
  );
}

export default Timer;
