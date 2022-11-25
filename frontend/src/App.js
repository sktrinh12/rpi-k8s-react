import React, { useEffect, useRef, useState } from "react";
import LCDdisplay from "./LCDdisplay";
import Title from "./Title";
import Input from "./Input";
import "./App.css";

function App() {
  const [stringTop, setStringTop] = useState("ABCDEFGHIJKLMNOP");
  const [stringBottom, setStringBottom] = useState("1234567890ABCDEF");
  const stringTopRef = useRef(null);
  const stringBottomRef = useRef(null);
  const submitStringsRef = useRef(null);

  useEffect(() => {
    stringTopRef.current.focus();
  }, []);

  const stringTopOnEnter = (e) => {
    if (e.key === "Enter") {
      stringBottomRef.current.focus();
    }
  };

  const stringTopChange = (e) => {
    e.preventDefault();
    setStringTop(e.target.value);
  };

  const stringBottomChange = (e) => {
    e.preventDefault();
    setStringBottom(e.target.value);
  };

  const svgOnClick = () => {
    stringTopRef.current.focus();
  };

  const onClickSubmit = (e) => {
    console.log(
      `Form submitted: ${stringTop} <-> ${stringTopRef.current.value} & ${stringBottom} <-> ${stringBottomRef.current.value}`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title
          className="header-style"
          title="Raspberry Pi LCD Display"
        ></Title>
        <Input
          type="text"
          onChange={stringTopChange}
          onKeyDown={stringTopOnEnter}
          ref={stringTopRef}
        />
        <Input
          type="text"
          onChange={stringBottomChange}
          ref={stringBottomRef}
        />
        <LCDdisplay
          className="lcd-class"
          stringTop={stringTop}
          stringBottom={stringBottom}
          onClick={svgOnClick}
        />
        <button
          className="button-style"
          onClick={onClickSubmit}
          ref={submitStringsRef}
        >
          Submit
        </button>
        <p>Type in text to see it appear on the LCD display!</p>
      </header>
    </div>
  );
}

export default App;
