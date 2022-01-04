import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  const { user, logOut } = useAuth()
  const handleLogOut = () => {
    logOut()
    setToggle(!toggle)
  }
  return (
    <div className="navbar mx-8 sm:mx-16 mt-4">
      <div className="navbar-nav flex justify-between items-center">
        <div className="logo">
          <h1 className="font-bold text-2xl">
            B<span className="text-red-500 ml-3">D</span>
          </h1>
          <p className="bd">
            Blood <span className="text-red-500">Donation</span>
          </p>
        </div>
        <div className="hidden sm:flex">
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
          {user.displayName ? <img onClick={() => setToggle(!toggle)} className="nav-profile-img" src={user.photoURL || "https://i.postimg.cc/FHjjxnrd/images.png" } alt="" />:<Link to='/login'
            className=" px-4 py-2 my-2 mr-2 rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200">
             <p><i className="far fa-user mr-2"></i>LogIn</p>
          </Link>}
        </div>
        <div
          onClick={() => setToggle2(!toggle2)}
          className="menu-bar sm:hidden"
        >
          <button className="m-0">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      <div className={toggle2 ? "sm-drop-down actives" : "sm-drop-down"}>
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
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <Link to='/'>
            <button onClick={handleLogOut} className=" px-4 py-2 my-2 mx-auto rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200">
              <i className="far fa-user mr-2"></i>
              LogOut
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
