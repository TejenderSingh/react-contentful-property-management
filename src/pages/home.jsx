import React from "react";
import FeaturedProperties from "../components/HomePage/FeaturedProperties";
import HomeStats from "../components/HomePage/HomeStats";
import MainHero from "../components/HomePage/MainHero";
import Services from "../components/HomePage/Services";

const Home = () => {
  return (
    <>
      <MainHero />
      <Services />
      <HomeStats />
      <FeaturedProperties />
    </>
  );
};

export default Home;
