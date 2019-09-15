import React, { Component } from "react";
import { FaBath, FaBed, FaCar, FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";
import Icons from "../components/Icons";
import NoSearchResults from "../components/NoSearchResults";
import StyledHero from "../components/StyledHero";
import defaultBg from "../images/room-1.jpeg";
import { PropertyContext } from "../PropertyContext";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg
    };
  }
  static contextType = PropertyContext;
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    const { getPro } = this.context;
    const { slug } = this.state;
    const property = getPro(slug);
    if (!property) {
      return (
        <div className="container mx-auto">
          <NoSearchResults />
          <div className="text-center">
            <Link
              to="/properties"
              className="bg-indigo-600 px-4 py-2 rounded text-white font-semibold text-center"
            >
              Back to Rooms
            </Link>
          </div>
        </div>
      );
    }
    const {
      name,
      description,
      featured,
      price,
      extras,
      bedroom,
      bathroom,
      garage,
      pets,
      images
    } = property;
    const [mainImg, ...defaultImg] = images;
    return (
      <div className="bg-gray-100">
        <StyledHero img={mainImg} height="calc(60vh - 72px)" />
        <div className="container mx-auto py-8 px-4 text-gray-800 flex flex-col-reverse lg:flex-row">
          <div className="main-content w-full lg:w-2/3 mr-0 lg:mr-12">
            <h1 className="leading-none text-2xl mb-6 font-bold capitalize">
              {name}
            </h1>
            <h2 className="leading-none mb-2 font-semibold text-lg">
              Description
            </h2>
            <p className="mb-4">{description}</p>
            <h2 className="leading-none mb-2 font-semibold text-lg">
              Features
            </h2>
            <ul className="">
              {extras.map((item, index) => {
                return (
                  <li className="leading-normal" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="w-full bg-white rounded shadow-lg mb-8 lg:mb-0 p-6">
              <div className="mb-4 flex justify-between items-baseline">
                <div>
                  <p className="leading-none mb-2 font-semibold">
                    Rent per week
                  </p>
                  <h1 className="font-semibold leading-none text-2xl">
                    ${price}
                  </h1>
                </div>
                {featured ? (
                  <div>
                    <span className="text-teal-800 bg-teal-200 px-3 py-1 rounded rounded-full uppercase text-xs font-bold">
                      new
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="flex lg:justify-between flex-wrap">
                <Icons number={bedroom} name="bedroom">
                  <FaBed />
                </Icons>
                <Icons number={bathroom} name="bathroom">
                  <FaBath />
                </Icons>
                <Icons number={garage} name="garage">
                  <FaCar />
                </Icons>
                <div>
                  <div className="flex items-center text-gray-600 leading-none">
                    <FaDog />
                    <p className="ml-1 text-xs">Dogs</p>
                  </div>
                  <p className="text-xs leading-tight capitalize">
                    {pets ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container grid grid-automin-300px grid-gap-8 px-4 pb-6 mx-auto images">
          {defaultImg.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={name}
                className="w-full h-64 object-cover"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SingleRoom;
