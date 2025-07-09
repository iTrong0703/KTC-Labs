import React, { useState } from "react";

function TemperatureConvert() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
      setKelvin("");
    } else {
      const c = parseFloat(value);
      const f = (c * 1.8) + 32;
      const k = c + 273.15;
      setFahrenheit(f.toFixed(1));
      setKelvin(k.toFixed(1));
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
      setKelvin("");
    } else {
      const f = parseFloat(value);
      const c = (f - 32) / 1.8;
      const k = ((f + 459.67) * 5)/9;
      setCelsius(c.toFixed(1));
      setKelvin(k.toFixed(1));
    }
  };

  const handleKelvinChange = (value: string) => {
    setKelvin(value);
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
    } else {
      const k = parseFloat(value);
      const c = k - 273.15;
      const f = (k * 1.8) - 459.67;
      setCelsius(c.toFixed(1));
      setFahrenheit(f.toFixed(1));
    }
  };
  return (
    <div className="temperature__container text-center bg-blue-400">
      <div className="grid grid-cols-3 gap-4 p-[20px]">
        <div>
          <label className="text-2xl">Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            className="w-full text-center bg-white mt-5 p-1"
          />
        </div>

        <div>
          <label className="text-2xl">Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            className="w-full text-center bg-white mt-5 p-1"
          />
        </div>

        <div>
          <label className="text-2xl">Kelvin</label>
          <input
            type="number"
            value={kelvin}
            onChange={(e) => handleKelvinChange(e.target.value)}
            className="w-full text-center bg-white mt-5 p-1"
          />
        </div>
      </div>
    </div>
  );
}

export default TemperatureConvert;
