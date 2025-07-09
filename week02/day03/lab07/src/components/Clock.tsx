import useClock from "../hooks/useClock";

function Clock() {
  const currentTime = useClock();
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "20px 40px",
        borderRadius: "10px",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        display: "inline-block",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      {currentTime}
    </div>
  );
}

export default Clock