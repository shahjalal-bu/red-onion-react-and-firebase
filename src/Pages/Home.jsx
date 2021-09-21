import React from "react";
import Foods from "../Components/Foods/Foods";
import Herosection from "../Components/HeroSection/Herosection";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <>
      <Herosection />
      <Foods />
      <Services />
    </>
  );
};

export default Home;
