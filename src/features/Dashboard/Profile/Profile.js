import React from "react";

const Profile = () => {
  return (
    <div className="w-11/12 mx-auto sm:w-10/12 mt-16 sm:mt-0 shadow-2xl">
      <div className="flex justify-between p-3 border-b-2">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button className="text-red-500">
          <i class="fas fa-pencil-alt mr-2"></i>
          Edit
        </button>
      </div>
      <div className="md:flex px-12 py-4 sm:space-x-16">
        <div className="img w-48 text-center mx-auto md:mx-0 mt-6 sm:mt-0">
          <img
            className="rounded-full"
            src="https://v4c8i7k5.rocketcdn.me/wp-content/uploads/2020/08/dad-baby-lying-down-happy-fathers-day-quotes-1024x1024.jpg"
            alt=""
          />
          <button className="btn hover:bg-red-500 hover:text-white hover:border-red-500 mt-4">
            Edit Profile
          </button>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-gray-600 text-base">Full name</h3>
          <h1 className="text-lg">Md Mahin islam</h1>
          <h3 className="font-bold text-gray-600 text-base mt-2">Email</h3>
          <h1 className="text-lg">mahin@gmail.com</h1>
          <h3 className="font-bold text-gray-600 text-base mt-2">Phone</h3>
          <h1 className="text-lg">01712342534</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
