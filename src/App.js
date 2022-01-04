import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FindDonar from "./features/FindDonar/FindDonar";
import Home from "./features/Home/Home";
import Navbar from "./features/Navbar/Navbar";
import Login from "./features/Authentication/Login/Login";
import PrivateRoute from "./features/Authentication/PrivateRoute/PrivateRoute";
import Registration from "./features/Authentication/Registration/Registration";
import BecomeDonar from "./features/BecomeDonar/BecomeDonar";
import Dashboard from "./features/Dashboard/Dashboard";
import Profile from "./features/Dashboard/Profile/Profile";
import Address from "./features/Dashboard/Address/Address";
import Verify from "./features/Dashboard/Verify/Verify";
import Footer from "./features/Shared/Footer/Footer";
import AboutUs from "./features/AboutUs/AboutUs";
import Contact from "./features/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="donar" element={<FindDonar />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="become-donar"
            element={
              <PrivateRoute>
                <BecomeDonar />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route exact path="/dashboard" element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="address" element={<Address />} />
            <Route path="verify" element={<Verify />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="donar" element={<FindDonar />} />
          <Route
            path="become-donar"
            element={
              <PrivateRoute>
                <BecomeDonar />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
