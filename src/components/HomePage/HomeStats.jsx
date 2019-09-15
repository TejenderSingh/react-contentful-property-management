import React from "react";
import Stat from "../Stat";
const HomeAbout = () => {
  return (
    <div className="bg-gray-800 py-16 md:py-20">
      <div className="container mx-auto px-6 grid grid-columns-8 grid-gap-8 sm:grid-gap-4">
        <Stat title="12" subtitle="Agents" />
        <Stat title="5" subtitle="Management Experts" />
        <Stat title="9+" subtitle="Years of Success" />
        <Stat title="2" subtitle="Award Winning Teams" />
      </div>
    </div>
  );
};

export default HomeAbout;
