import React from "react";
import AboutBackground from "../Assets/about-background.png";
import video from "../Assets/vdo.mp4";
import AboutBackgroundImage from "../Assets/about-background-image.png";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        "Join with us to discover delicious meals that cater to 
        various dietary needs. We offer nutritious options, customizable meals, and information on the importance of 
        balanced nutrition. Whether you're vegan, gluten-free, or have specific preferences, we've got you covered for 
        a tasty and healthy dining experience."
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
           <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;