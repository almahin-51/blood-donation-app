
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FindDonar from "./features/FindDonar/FindDonar";
import Home from "./features/Home/Home";
import Navbar from "./features/Navbar/Navbar";
import Login from './features/Authentication/Login/Login';
import Registration from './features/Authentication/Registration/Registration';
import BecomeDonar from './features/BecomeDonar/BecomeDonar';
import FindDonar from './features/FindDonar/FindDonar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='find-donar' element={<FindDonar />} />
          <Route path='become-donar' element={<BecomeDonar />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
