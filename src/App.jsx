import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === "" || height === "") {
      alert("Please enter valid weight and height");
      return;
    }

    let bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    // Checking message based on BMI Value
    if (bmiValue < 18.5) {
      setMessage("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>BMI Calculator (lbs / inches)</h2>

      <form onSubmit={calculateBMI}>
        <div className="input-box">
          <label>Weight (lbs)</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Height (inches)</label>
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="btn-group">
          <button className="btn" type="submit">Calculate</button>
          <button className="btn-outline" onClick={reload}>Reload</button>
        </div>

        <div className="center">
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
