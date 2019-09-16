import React from "react";
import about from "../../images/about.jpg";
import Title from "../Globals/Title";

const About = () => {
  return (
    <div className="py-12">
      <Title title="About Us" />
      <div className="my-8">
        <img
          src={about}
          alt="Our Team"
          className="w-full h-full mx-auto"
          style={{ maxWidth: "1900px" }}
        />
      </div>
      <div
        className="mx-auto px-6 lg:flex lg:justify-around"
        style={{ maxWidth: "1850px" }}
      >
        <div className="font-hairline text-xl lg:text-2xl w-full max-w-auto lg:max-w-md mb-8">
          We are a family business with over 25 years of experience. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Porro, minus!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex.
        </div>
        <div className="w-full max-w-auto lg:max-w-4xl lg:ml-12">
          <p className="text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            voluptatibus, nostrum mollitia quae harum est minus eius amet
            ratione necessitatibus voluptates perferendis accusamus hic, magnam
            cum reprehenderit tenetur architecto esse! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Alias nostrum soluta nam odio
            laudantium nihil facilis eaque, quam tenetur dolor, eos expedita
            officia ad? Expedita odio id laborum magni sunt.
          </p>
          <br />
          <p className="text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            voluptatibus, nostrum mollitia quae harum est minus eius amet
            ratione necessitatibus voluptates perferendis accusamus hic, magnam
            cum reprehenderit tenetur architecto esse! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Alias nostrum soluta nam odio
            laudantium nihil facilis eaque, quam tenetur dolor, eos expedita
            officia ad? Expedita odio id laborum magni sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
