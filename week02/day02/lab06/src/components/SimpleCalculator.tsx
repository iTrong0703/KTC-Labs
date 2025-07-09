import { useState } from "react";

function SimpleCalculator() {
  const [input, setInput] = useState("");
  const handleClick = (value: string) => {
    if (value === "=") {
      handleEvaluate();
    } else if (value === "AC") {
      handleClear();
    } else if (value === "+/-") {
      handleToggleSign();
    } else if (value === "%") {
      handlePercent();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleEvaluate = () => {
    try {
      const expression = input.replace(/x/g, "*").replace(/÷/g, "/"); // thay x = * và thay ÷ = /
      const result = Function(`return (${expression})`)();
      // ví dụ 1*2*3: Function(`return (${expression}) ~ Function(`return (${(1*2*3)}) = 6
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleToggleSign = () => {
    if (!input) return;
    if (input.startsWith("-")) {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

  const handlePercent = () => {
    try {
      const result = parseFloat(input) / 100;
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };
  return (
    <div className="calculator__container w-80 bg-black">
      <div className="calculator__screen bg-gray-900 h-24 flex items-center justify-end px-4">
        <div className="text-white text-3xl">{input || "0"}</div>
      </div>
      <div className="calculator__btn-container grid grid-cols-4 gap-0">
        {/* Row 1 */}
        <button
          onClick={() => handleClick("AC")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          AC
        </button>

        <button
          onClick={() => handleToggleSign()}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          &#8314;&#8725;&#8331;
        </button>
        <button
          // %
          onClick={() => handleClick("&#37;")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          &#37;
        </button>
        <button
          // /
          onClick={() => handleClick("&#247;")}
          className="h-16 border text-2xl border-black bg-yellow-600 text-white"
        >
          &#247;
        </button>
        {/* Row 2 */}
        <button
          onClick={() => handleClick("7")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          9
        </button>
        <button
          onClick={() => handleClick("x")}
          className="h-16 border text-2xl border-black bg-yellow-600 text-white"
        >
          x
        </button>
        {/* Row 3 */}
        <button
          onClick={() => handleClick("4")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className="h-16 border text-2xl border-black bg-yellow-600 text-white"
        >
          -
        </button>
        {/* Row 4 */}
        <button
          onClick={() => handleClick("1")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          3
        </button>
        <button
          onClick={() => handleClick("+")}
          className="h-16 border text-2xl border-black bg-yellow-600 text-white"
        >
          +
        </button>
        {/* Row 5 */}
        <button
          onClick={() => handleClick("0")}
          className="col-span-2 h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="h-16 border text-2xl border-black bg-gray-500 text-white"
        >
          .
        </button>
        <button
          onClick={() => handleClick("=")}
          className="h-16 border text-2xl border-black bg-yellow-600 text-white"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default SimpleCalculator;
