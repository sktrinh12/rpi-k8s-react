import LCDdisplay from "./LCDdisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LCDdisplay className="lcd-class" />
        <p>Type in text to see it appear on the LCD display!</p>
      </header>
    </div>
  );
}

export default App;
