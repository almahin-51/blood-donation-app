import React from "react";
import useAuth from "../../Hooks/useAuth";
import Blog from "./Blog/Blog";
import Counter from "./Counter/Counter";
import DonarSection from "./DonarSection/DonarSection";
import Hero from "./Hero/Hero";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home = () => {
  const { user, handleClick } = useAuth();
  console.log(user);
  return (
    <div onClick={handleClick}>
      <Hero />
      <DonarSection />
      <HomeAbout />
      <Counter />
      <Blog />
    </div>
  );
};

export default Home;
