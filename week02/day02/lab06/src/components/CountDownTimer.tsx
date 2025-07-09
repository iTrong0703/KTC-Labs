import { useEffect, useRef, useState } from "react";

function CountDownTimer() {
  const [time, setTime] = useState<number>(5 * 60); // 5 phút = 300 giây
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000) as unknown as number;
    }
    if (time === 0 && isActive) {
      alert("Thời gian đã hết!");
      setIsActive(false);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, time]);

  const handleMinutesChange = (newMinutes: number) => {
    if (!isActive) {
      setTime(newMinutes * 60 + seconds);
    }
  };

  const handleSecondsChange = (newSeconds: number) => {
    if (!isActive) {
      setTime(minutes * 60 + newSeconds);
    }
  };

  const handleStart = () => {
    if (!isActive && time > 0) {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(5 * 60); // Reset về 5 phút
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer__container w-[400px] flex flex-col items-center justify-center bg-gray-100">
      <div className="text-blue-500 flex justify-center items-center pt-[5px] pb-[5px]">
        ⧗ TIMER
      </div>
      <hr className="border border-blue-500 w-full" />
      <br />
      <div className="flex justify-center items-end space-x-1 text-black my-6">
        <span className="text-6xl font-light">{formatTime(time)}</span>
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
          value={minutes}
          onChange={(e) => handleMinutesChange(parseInt(e.target.value))}
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
          value={seconds}
          onChange={(e) => handleSecondsChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <br />
      <hr className="border border-blue-500 w-full" />

      <div className="flex justify-center gap-4">
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white p-[5px] mb-[10px] mt-[10px] hover:bg-blue-300"
        >
          START
        </button>
        <button
          onClick={handleReset}
          className="border border-blue-600 text-blue-600 p-[5px] mb-[10px] mt-[10px] hover:bg-blue-300"
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CountDownTimer;
