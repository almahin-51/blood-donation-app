import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Profile from "./Profile/Profile";
import "./Dashboard.css";
const Dashboard = () => {
  const {logOut} = useAuth();
  return (
    <div className="dashboard sm:flex mx-2 md:mx-12 sm:space-x-3 my-5">
      <div className="aside w-11/12 mx-auto mt-6 sm:mt-0 sm:w-64 rounded-md shadow-2xl sm:mx-0">
        <ul>
          <li>
            <NavLink
              to={"profile"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              <i className="fas fa-user mr-3"></i>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"address"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              <i className="fas fa-map-marker-alt mr-3"></i>
              Address
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"verify"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              <i className="fas fa-user-check mr-2"></i>
              Verify
            </NavLink>
          </li>
          <button onClick={logOut}>
            <i class="fas fa-sign-out-alt mr-3"></i>
            LogOut
          </button>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
