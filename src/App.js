import Counter from "./Counter";
import Button from "./Button";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <div className="component-box_button">
          <Counter/>
        </div>
        
        <div className="component-box_button">
          <Button />
        </div>
      
      </div>
    </div>
  );
}

export default App;
