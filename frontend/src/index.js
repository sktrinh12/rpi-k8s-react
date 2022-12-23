import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./NotFound";
import Clock from "./Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lcd" element={<App />} />
      <Route path="/binary-clock" element={<Clock />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
