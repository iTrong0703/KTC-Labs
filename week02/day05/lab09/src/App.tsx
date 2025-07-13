import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div className="app__container">
      <div
        className="btn__container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <button
            style={{ padding: "5px" }}
            onClick={() => setCurrentQuestion(1)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 1
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Câu 1 - Todo List
          </button>
        </div>
        <div>
          <button
            style={{ padding: "5px" }}
            onClick={() => setCurrentQuestion(2)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 2
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Câu 2 - Product Management App
          </button>
        </div>
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/*{currentQuestion === 1 ? (*/}
        {/*  <Question1Component />*/}
        {/*) : (*/}
        {/*  <Question2Component />*/}
        {/*)}*/}
      </div>
    </div>
  );
}

export default App;
