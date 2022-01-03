import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FindDonar from "./features/FindDonar/FindDonar";
import Home from "./features/Home/Home";
import Navbar from "./features/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="find-donar" element={<FindDonar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
