import React from "react";

function SimpleCalculator() {
  return (
    <div className="calculator__container w-80 bg-black">
      <div className="calculator__screen bg-gray-900 h-24 flex items-center justify-end px-4">
        <div className="text-white text-3xl">Screen</div>
      </div>
      <div className="calculator__btn-container grid grid-cols-4 gap-0">
        {/* Row 1 */}
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          AC
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          &#8314;&#8725;&#8331;
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          &#37;
        </button>
        <button className="h-16 border text-2xl border-black bg-yellow-600 text-white">
          &#247;
        </button>

        {/* Row 2 */}
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          7
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          8
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          9
        </button>
        <button className="h-16 border text-2xl border-black bg-yellow-600 text-white">
          x
        </button>

        {/* Row 3 */}
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          4
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          5
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          6
        </button>
        <button className="h-16 border text-2xl border-black bg-yellow-600 text-white">
          -
        </button>

        {/* Row 4 */}
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          1
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          2
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          3
        </button>
        <button className="h-16 border text-2xl border-black bg-yellow-600 text-white">
          +
        </button>

        {/* Row 5 */}
        <button className="col-span-2 h-16 border text-2xl border-black bg-gray-500 text-white">
          0
        </button>
        <button className="h-16 border text-2xl border-black bg-gray-500 text-white">
          .
        </button>
        <button className="h-16 border text-2xl border-black bg-yellow-600 text-white">
          =
        </button>
      </div>
    </div>
  );
}

export default SimpleCalculator;
