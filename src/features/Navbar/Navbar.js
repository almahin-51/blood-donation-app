import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="navbar">
      <div className="navbar-nav flex justify-end">
        <ul className="flex justify-end">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/donar"}>Donar</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <button
          onClick={() => setToggle(!toggle)}
          className=" px-4 py-2 my-2 mr-2 rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200"
        >
          <i className="far fa-user mr-2"></i>
          LogIn
        </button>
      </div>
      <div className="sm-drop-down">
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/donar"}>Donar</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <button className=" px-4 py-2 my-2 mx-auto rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200">
            <i className="far fa-user mr-2"></i>
            LogIn
          </button>
        </ul>
      </div>

      <div className={toggle ? "lg-drop-down" : "lg-drop-down actives"}>
        <ul>
          <p>Welcome</p>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <button className=" px-4 py-2 my-2 mx-auto rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200">
            <i className="far fa-user mr-2"></i>
            LogOut
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
