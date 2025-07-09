import React, { useState } from "react";

function SimpleRandom() {
  const [randomNumber, setRandomNumber] = useState(99);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const generateRandomNumber = () => {
    const minValue = parseInt(min.toString()) || 0;
    const maxValue = parseInt(max.toString()) || 100;

    const actualMin = Math.min(minValue, maxValue);
    const actualMax = Math.max(minValue, maxValue);

    const random =
      Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
    setRandomNumber(random);
  };

  return (
    <div className="random__container w-full max-w-md mx-auto  p-6 bg-white shadow rounded text-center border ">
      <div className="flex flex-row items-center justify-around">
        <div className="random__display text-6xl font-light text-black">
          {randomNumber}
        </div>
        <div className="random__input flex flex-col justify-center items-center gap-8 mt-6">
          <div className="random__input-min-range flex flex-col">
            <label htmlFor="min" className="mb-1">
              Min
            </label>
            <input
              id="min"
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="border-b-2 w-16 text-center outline-none text-black"
            />
            <hr className="border border-black w-full" />
          </div>
          <div className="random__input-max-range flex flex-col">
            <label htmlFor="max" className="mb-1">
              Max
            </label>
            <input
              id="max"
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="border-b-2 w-16 text-center outline-none text-black"
            />
            <hr className="border border-black w-full" />
          </div>
        </div>
      </div>

      <button
        onClick={generateRandomNumber}
        className="w-full bg-blue-600 hover:bg-blue-400 text-white mt-[50px]"
      >
        GENERATE
      </button>
    </div>
  );
}

export default SimpleRandom;
