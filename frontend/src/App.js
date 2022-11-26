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
  const baseURL = "http://k8s-main:";
  const nodes = ["worker1", "worker2"];
  const [workerNode, setWorkerNode] = useState(nodes[0]);

  const workerPorts = { worker1: "31000", worker2: "31500", worker3: "31700" };

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

  const handleDropdownChange = (e) => {
    setWorkerNode(e.target.value);
  };

  const svgOnClick = () => {
    stringTopRef.current.focus();
  };

  let getResponse = async () => {
    try {
      const backendURL = `${baseURL}${workerPorts[workerNode]}/lcd?string_top=${stringTop}&string_bottom=${stringBottom}&delay=0`;
      console.log(backendURL);
      let fetched = await fetch(backendURL);
      if (fetched) {
        let json = await fetched.json();
        console.log(json);
        return json;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onClickSubmit = () => {
    console.log(
      `Form submitted: ${stringTop} <-> ${stringTopRef.current.value} & ${stringBottom} <-> ${stringBottomRef.current.value} | ${workerNode}`
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
        <div className="dropdown-style">
          <label htmlFor="nodes">Worker Nodes</label>
          <select name="nodes" onChange={handleDropdownChange}>
            {nodes.map((n, i) => {
              return (
                <option key={i} value={n}>
                  {n}
                </option>
              );
            })}
          </select>
        </div>
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
        <p>
          Type in two sentences each with maximum of 16 characters to see it
          appear on the LCD display!
        </p>
      </header>
    </div>
  );
}

export default App;
