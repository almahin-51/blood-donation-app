import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 mt-10 border-red-200">
      <div className="container mx-auto px-5 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="footer-box">
            <div className="logo">
              <h1 className="font-bold text-2xl">
                B<span className="text-red-500 ml-3">D</span>
              </h1>
              <p className="bd">
                Blood <span className="text-red-500">Donation</span>
              </p>
            </div>
            <p className="mt-4 pr-20">
              We are a organization who works for the people who needs blood for
              their lives.Currently we are working in Bangladesh.
            </p>
          </div>
          <div className="footer-box ">
            <h4 className="text-4xl  font-semibold mb-4">Important Links</h4>
            <p className="mb-2 font-medium">
              <i className="fas fa-caret-right text-red-500"></i> Donar
              Registration
            </p>
            <p className="mb-2 font-medium">
              <i className="fas fa-caret-right text-red-500"></i> Login/Register
            </p>
            <p className="mb-2 font-medium">
              <i className="fas fa-caret-right text-red-500"></i> Dashboard
            </p>
          </div>
          <div className="footer-box ">
            <h4 className="text-4xl  font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 font-medium">
              <i className="fas fa-envelope text-red-500 mr-2"></i> blood@bd.com
            </p>
            <p className="mb-2 font-medium">
              <i className="fas fa-location-arrow text-red-500 mr-2"></i>{" "}
              Road-1/2,Mirpur,Dhaka
            </p>
            <p className="mb-2 font-medium">
              <i className="fas fa-phone-alt text-red-500 mr-2"></i>
              +8801992442075
            </p>
          </div>
        </div>
        <p className="text-center font-semibold my-8">
          All right reserved &copy;{" "}
          <span className="text-red-500">Blood Donation BD</span> 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
