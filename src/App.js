import React from "react";
import Counter from "./Counter.tsx";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="component-box_button">
          <Button size={36} label="Нажми меня">
            <Counter size={16} count={5} />
          </Button>
        </div>

        <div className="component-box_button">
          <Counter size={24} count={3} />
        </div>
      </div>
    </div>
  );
}

export default App;