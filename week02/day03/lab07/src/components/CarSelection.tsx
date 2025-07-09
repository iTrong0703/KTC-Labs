import { useEffect, useState } from "react";

function CarSelection() {
  const [car, setCar] = useState("Mercedes S600");
  const [color, setColor] = useState("Black");
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    setSelectedText(`You selected a ${color} - ${car}`);
  }, [car, color]);

  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCar(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="car__container">
      <div className="select__container">
        <label htmlFor="">Select a car: </label>
        <select name="cars" id="cars" value={car} onChange={handleCarChange}>
          <option value="Mercedes">Mercedes S600</option>
          <option value="Toyota">Toyota</option>
          <option value="Volvo">Volvo</option>
          <option value="Audi">Audi</option>
        </select>
      </div>
      <div className="select__container">
        <label htmlFor="">Select a color: </label>
        <select
          name="colors"
          id="colors"
          value={color}
          onChange={handleColorChange}
        >
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div>
      <div className="result__container">
        <h1>{selectedText}</h1>
      </div>
    </div>
  );
}

export default CarSelection;
