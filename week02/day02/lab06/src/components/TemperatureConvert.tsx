import { useState } from "react";

function TemperatureConvert() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");
  const [kelvin, setKelvin] = useState<string>("");
  const [lastChanged, setLastChanged] = useState<"C" | "F" | "K" | null>(null);

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    setLastChanged("C");
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    setLastChanged("F");
  };

  const handleKelvinChange = (value: string) => {
    setKelvin(value);
    setLastChanged("K");
  };
  const handleConvert = () => {
    if (lastChanged === "C") {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit((c * 1.8 + 32).toFixed(1));
        setKelvin((c + 273.15).toFixed(1));
      }
    } else if (lastChanged === "F") {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        const c = (f - 32) / 1.8;
        setCelsius(c.toFixed(1));
        setKelvin((((f + 459.67) * 5) / 9).toFixed(1));
      }
    } else if (lastChanged === "K") {
      const k = parseFloat(kelvin);
      if (!isNaN(k)) {
        const c = k - 273.15;
        setCelsius(c.toFixed(1));
        setFahrenheit((k * 1.8 - 459.67).toFixed(1));
      }
    }
  };

  const handleClear = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
    setLastChanged(null);
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
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handleConvert}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          CONVERT
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default TemperatureConvert;
