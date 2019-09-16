import React from "react";
import ScrollToTopOnMount from "../components/Globals/ScrollToTop";
import FeaturedProperties from "../components/HomePage/FeaturedProperties";
import HomeStats from "../components/HomePage/HomeStats";
import MainHero from "../components/HomePage/MainHero";
import Services from "../components/HomePage/Services";
const Home = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <MainHero />
      <Services />
      <HomeStats />
      <FeaturedProperties />
    </>
  );
};

export default Home;
