import React from "react";

const Counter = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-5 lg:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="counter-box text-center bg-white py-10 rounded shadow-md">
            <i className="fas fa-heartbeat text-5xl text-red-500"></i>
            <div className="counter-text">
              <h4 className="text-4xl mt-4 mb-2">983</h4>
              <p className="text-2xl capitalize">Success Patient</p>
            </div>
          </div>
          <div className="counter-box text-center bg-white py-10 rounded shadow-md">
            <i className="fas fa-stethoscope text-5xl text-red-500"></i>
            <div className="counter-text">
              <h4 className="text-4xl mt-4 mb-2">322</h4>
              <p className="text-2xl capitalize">Happy Donars</p>
            </div>
          </div>
          <div className="counter-box text-center bg-white py-10 rounded shadow-md">
            <i className="fas fa-fire text-5xl text-red-500"></i>
            <div className="counter-text">
              <h4 className="text-4xl mt-4 mb-2">120</h4>
              <p className="text-2xl capitalize">Happy Client</p>
            </div>
          </div>
          <div className="counter-box text-center bg-white py-10 rounded shadow-md">
            <i className="fas fa-award text-5xl text-red-500"></i>
            <div className="counter-text">
              <h4 className="text-4xl mt-4 mb-2">14</h4>
              <p className="text-2xl capitalize">Total Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
