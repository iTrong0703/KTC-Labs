import React, { useRef, useState } from "react";

function CountDownTimer() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(5);

  const totalSeconds = minutes * 60 + seconds;

  const tick = () => {
    setMinutes((prevMin) => {
      if (prevMin === 0 && seconds === 0) {
        clearInterval(intervalRef.current);
        setRunning(false);
        console.log("⏰ Time's up!");
        return 0;
      }

      const total = prevMin * 60 + seconds - 1;
      const newMin = Math.floor(total / 60);
      const newSec = total % 60;

      setSeconds(newSec);
      return newMin;
    });
  };

  const handleStart = () => {
    if (totalSeconds === 0 || running) return;
    setRunning(true);
    intervalRef.current = setInterval(tick, 1000);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer__container w-[400px] flex flex-col items-center justify-center bg-gray-100">
      <div className="text-blue-500 flex justify-center items-center pt-[5px] pb-[5px]">
        ⧗ TIMER
      </div>
      <hr className="border border-blue-500 w-full" />
      <br />
      <div className="flex justify-center items-end space-x-1 text-black my-6">
        <span className="text-6xl font-light">{minutes}</span>
        <span className="text-2xl mb-2">m</span>
        <span className="text-6xl font-light">
          {seconds.toString().padStart(2, "0")}
        </span>
        <span className="text-2xl mb-2">s</span>
      </div>

      <br />
      <hr className="border border-blue-500 w-full" />
      <div className="w-full mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Minutes: {minutes}
        </label>
        <input
          type="range"
          min="0"
          max="60"
          disabled={running}
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Seconds: {seconds}
        </label>
        <input
          type="range"
          min="0"
          max="59"
          disabled={running}
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <br />
      <hr className="border border-blue-500 w-full" />

      <div className="flex justify-center gap-4">
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white p-[5px] mb-[10px] mt-[10px]"
        >
          START
        </button>
        <button
          onClick={handleReset}
          className="border border-blue-600 text-blue-600 p-[5px] mb-[10px] mt-[10px]"
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CountDownTimer;
