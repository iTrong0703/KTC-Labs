import React, { useEffect, useState } from "react";

function useClock(): string {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateClock(); // chạy lần đầu
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);
  return time;
}

export default useClock;
