import React from "react";

const Address = () => {
  return (
    <div className="w-11/12 mx-auto sm:w-10/12 mt-16 sm:mt-0 shadow-2xl">
      <div className="flex justify-between py-2 px-5 border-b-2">
        <h1 className="text-2xl font-bold">Address</h1>
        <button className="text-red-500">
          <i className="fas fa-pencil-alt mr-2"></i>
          Edit
        </button>
      </div>
      <div className="present-address p-5">
        <h2 className="text-xl text-indigo-600">Present Address</h2>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          Your Country
        </small>
        <h3>Bangladesh</h3>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          District
        </small>
        <h3>Dhaka</h3>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          Street Address
        </small>
        <h3>Narayongonj, Dhaka</h3>
      </div>
      <div className="present-address p-5">
        <h2 className="text-xl text-indigo-600">Permanent Address</h2>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          Your Country
        </small>
        <h3>Bangladesh</h3>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          District
        </small>
        <h3>Dhaka</h3>
        <small className="font-bold text-gray-500 text-sm mt-4 block">
          Street Address
        </small>
        <h3>Narayongonj, Dhaka</h3>
      </div>
    </div>
  );
};

export default Address;
