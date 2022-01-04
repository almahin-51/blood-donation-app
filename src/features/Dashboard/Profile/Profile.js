import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useDonar from "../../../Hooks/useDonar";

const Profile = () => {
  const { user } = useAuth()
  const { donar } = useDonar(user.email)
  console.log(donar);
  return (
    <div className="w-11/12 mx-auto sm:w-10/12 mt-16 sm:mt-0 shadow-2xl">
      <div className="flex justify-between py-2 px-5 border-b-2">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button className="text-red-500">
          <i className="fas fa-pencil-alt mr-2"></i>
          Edit
        </button>
      </div>
      <div className="md:flex px-12 py-4 sm:space-x-16">
        <div className="img w-48 text-center mx-auto md:mx-0 mt-6 sm:mt-0">
          <img
            className="profile-img mx-auto"
            src={user.photoURL || "https://i.postimg.cc/FHjjxnrd/images.png"}
            alt=""
          />
          {
            donar.group ? <button className="mt-3">Verified Donar<i class="fas fa-check text-blue-500 ml-2"></i></button> : <Link to='/become-donar' className="btn inline-block hover:bg-red-500 hover:text-white hover:border-red-500 mt-4 transition-all duration-300 font-semibold">
              Become a Donar
            </Link>
          }
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-gray-600 text-base">Full name</h3>
          <h1 className="text-lg">{user.displayName}</h1>
          <h3 className="font-bold text-gray-600 text-base mt-2">Email</h3>
          <h1 className="text-lg">{user.email}</h1>
          <h3 className="font-bold text-gray-600 text-base mt-2">Phone</h3>
          <h1 className="text-lg">{donar?.phone || <small className="text-grey-300">Null</small>}</h1>
          <h3 className="font-bold text-gray-600 text-base mt-2">Blood Group</h3>
          <h1 className="text-lg uppercase">{donar?.group || <small className="text-grey-300">Null</small>}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
