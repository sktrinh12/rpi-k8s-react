import React, { useEffect, useRef, useState } from "react";
import LCDdisplay from "./LCDdisplay";
import Title from "./Title";
import Input from "./Input";
import "./App.css";

function App() {
  const [stringTop, setStringTop] = useState("ABCDEFGHIJKLMNOP");
  const [stringBottom, setStringBottom] = useState("1234567890ABCDEF");
  const [onStringBottom, setOnStringBottom] = useState(false);
  const stringTopRef = useRef(null);
  const stringBottomRef = useRef(null);
  const submitStringsRef = useRef(null);
  const baseURL = "192.168.1.21:8000/lcd";

  useEffect(() => {
    stringTopRef.current.focus();
    setOnStringBottom(false);
  }, []);

  const stringTopOnEnter = (e) => {
    if (e.key === "Enter") {
      stringBottomRef.current.focus();
    }
  };

  const stringTopChange = (e) => {
    e.preventDefault();
    setStringTop(e.target.value);
    setOnStringBottom(false);
  };

  const stringBottomChange = (e) => {
    e.preventDefault();
    setStringBottom(e.target.value);
    setOnStringBottom(true);
  };

  const svgOnClick = () => {
    stringTopRef.current.focus();
  };

  let getResponse = async () => {
    try {
      let fetched = await fetch(
        `${baseURL}?string_top=${stringTop}&string_bottom=${stringBottom}&delay=30`
      );
      if (fetched) {
        let json = await fetched.json();
        console.log(json);
        return json;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onClickSubmit = (e) => {
    console.log(
      `Form submitted: ${stringTop} <-> ${stringTopRef.current.value} & ${stringBottom} <-> ${stringBottomRef.current.value}`
    );
    getResponse();
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
          value={stringTop}
        />
        <Input
          type="text"
          onChange={stringBottomChange}
          ref={stringBottomRef}
          value={stringBottom}
        />
        <LCDdisplay
          className="lcd-class"
          stringTop={stringTop}
          stringBottom={stringBottom}
          onClick={svgOnClick}
          onStringBottom={onStringBottom}
        />
        <button
          onClick={onClickSubmit}
          className="button-3d"
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
