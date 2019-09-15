import React, { Component } from "react";
import { FaMapMarker } from "react-icons/fa";
import mapImg from "../../images/map.png";
import TooltipImg from "../../images/tooltip-img.jpg";
// import "./Map.css";

class Map extends Component {
  tooltip = React.createRef();
  icon = React.createRef();
  state = {
    iconX: 0,
    iconY: 0,
    tooltipWidth: 0,
    tooltipHeight: 0
  };

  setDimentions = () => {
    let { offsetLeft, offsetTop } = this.icon.current;
    let { clientHeight, clientWidth } = this.tooltip.current;

    this.setState(
      {
        iconX: offsetLeft,
        iconY: offsetTop,
        tooltipWidth: clientWidth,
        tooltipHeight: clientHeight
      },
      () => {
        this.setTooltipPosition();
      }
    );
  };
  addTooltipClass = () => {
    const tooltip = this.tooltip.current;
    tooltip.classList.add("active");
  };
  removeTooltipClass = () => {
    const tooltip = this.tooltip.current;
    tooltip.classList.remove("active");
  };

  setTooltipPosition = () => {
    let { style } = this.tooltip.current;
    let { iconX, iconY, tooltipHeight, tooltipWidth } = this.state;
    const tooltipPosX = iconX - tooltipWidth / 2 + 15;
    const tooltipPosY = iconY - tooltipHeight - 15;
    style.left = `${tooltipPosX}px`;
    style.top = `${tooltipPosY}px`;
  };

  componentDidMount() {
    const marker = this.icon.current;
    const tooltip = this.tooltip.current;
    let timer;
    this.setDimentions();
    window.addEventListener("load", this.setDimentions);
    window.addEventListener("resize", this.setDimentions);

    marker.addEventListener("mouseenter", () => {
      this.addTooltipClass();
      this.setDimentions();
    });
    marker.addEventListener("mouseleave", () => {
      timer = setTimeout(() => {
        this.removeTooltipClass();
      }, 500);
    });
    tooltip.addEventListener("mouseenter", () => {
      clearTimeout(timer);
    });
    tooltip.addEventListener("mouseleave", () => {
      this.removeTooltipClass();
    });
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.setDimentions);
    window.removeEventListener("resize", this.setDimentions);
  }

  render() {
    // let { iconX, iconY, tooltipHeight, tooltipWidth, ww } = this.state;
    return (
      <div className="px-6 pt-12 w-full">
        <main className="w-full max-w-5xl mx-auto">
          <figure>
            <img src={mapImg} alt="map" className="mapImg" />
            <figcaption>
              <span className="icon" ref={this.icon}>
                <FaMapMarker />
              </span>
              <div className="tooltip" ref={this.tooltip}>
                <div className="thumb">
                  <img src={TooltipImg} alt="Property Management" />
                </div>
                <div
                  className="flex flex-col justify-between p-6"
                  style={{ width: "60%" }}
                >
                  <h3 className="text-indigo-700 text-2xl font-semibold leading-none mb-4">
                    Property Managers
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-tight">
                    100 Main Street, Christchurch 1234, New Zealand
                  </p>
                  <p className="text-gray-900 mb-6 text-base leading-tight">
                    We are property managers Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Delectus consectetur. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    consectetur.
                  </p>
                  <div className="flex justify-center not-clickable">
                    <button
                      className="w-11/12 bg-teal-500 text-base hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
                      style={{
                        transition: ".2s ease all"
                      }}
                    >
                      Directions
                    </button>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </main>
      </div>
    );
  }
}

export default Map;
