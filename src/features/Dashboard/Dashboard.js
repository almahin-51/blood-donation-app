import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  return (
    <div className="dashboard sm:flex mx-2 md:mx-12 sm:space-x-3 my-5">
      <div className="aside w-11/12 mx-auto mt-6 sm:mt-0 sm:w-64 rounded-md shadow-2xl sm:mx-0">
        <ul>
          <li>
            <Link to={"/dashboard/profile"}>
              <i class="fas fa-user mr-3"></i>
              Profile
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/address"}>
              <i class="fas fa-map-marker-alt mr-3"></i>
              Address
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/verify"}>
              <i class="fas fa-user-check mr-2"></i>
              Verify
            </Link>
          </li>
          <button>
            <i class="fas fa-sign-out-alt mr-3"></i>
            LogOut
          </button>
        </ul>
      </div>
      <Profile />
    </div>
  );
};

export default Dashboard;
