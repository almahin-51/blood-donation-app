import React from "react";
import useAuth from "../../Hooks/useAuth";
import Counter from "../Home/Counter/Counter";
import HomeAbout from "../Home/HomeAbout/HomeAbout";

const AboutUs = () => {
  const { handleClick } = useAuth();
  return (
    <div onClick={handleClick}>
      <div
        className="bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-vector/white-background-with-bloodstain-halloween_1048-3273.jpg)",
          width: "100%",
          height: "250px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h2 className="md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold">
          About Us
        </h2>
      </div>
      <HomeAbout />
      <Counter />
    </div>
  );
};

export default AboutUs;
