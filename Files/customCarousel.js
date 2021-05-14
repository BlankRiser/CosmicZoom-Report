import React, { useState, Fragment } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Media from "react-media";

// import GifPlayer from "react-gif-player";

import "./carousel.css";

import cellGif from "../../lotties/cell/Comp 1.gif";

import insectGif from "../../lotties/insects/Comp 1_1.gif";

import humanPng from "../../lotties/human/Human-01.png";

const details = [
  {
    id: 1,
    gifName: "normal",
    size: "1",
    superscript: "",
    image: humanPng,
    name: "Human",
    desc: "lorem ipsum dolor ipsit",
    link: "/human",
  },
  {
    id: 2,
    gifName: "normal",
    size: "10",
    superscript: "-2",
    image: insectGif,
    name: "Insect",
    desc: "lorem ipsum dolor ipsit",
    link: "/insects",
  },
  {
    id: 3,
    gifName: "normal",
    size: "10",
    superscript: "-5",
    image: cellGif,
    name: "Cell",
    desc: "lorem ipsum dolor ipsit",
    link: "/cell",
  },
];

const Carousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settingsBig = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    adaptiveHeight: true,
  };
  const settingsMedium = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    adaptiveHeight: true,
  };
  const settingsSmall = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    adaptiveHeight: true,
  };

  return (
    <div className="carousel-container">
      <section style={{ margin: 0, padding: 0 }}>
        <Slider {...settingsSmall}>
          {details.map((item, index) => (
            <div
              className={
                index === imageIndex
                  ? "slide activeSlide"
                  : "slide inactiveSlide"
              }
            >
              <Link to={item.link}>
                <img
                  src={item.image}
                  className={item.gifName === "normal" ? "normal" : "abnormal"}
                  alt={item.image}
                  key={index}
                />
              </Link>

              <div className="desc" style={{}}>
                <Link to={item.link}>
                  <h2
                    class="size texts metric"
                    style={{ fontSize: "40px", color: "#cbd5e0" }}
                  >
                    {item.size}
                    <sup>{item.superscript}</sup>m
                  </h2>

                  <h3
                    className="bash-name texts"
                    style={{ fontSize: "50px", fontWeight: "800" }}
                  >
                    {item.name}
                  </h3>
                </Link>
                <p
                  className="bash-description texts"
                  style={{
                    width: "650px",
                    paddingRight: "3rem",
                    paddingLeft: "3rem",
                    fontSize: " 30px",
                    lineHeight: "1.1",
                  }}
                >
                  {" "}
                  <span> {item.desc} </span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      )
    </div>
  );
};

export default Carousel;
