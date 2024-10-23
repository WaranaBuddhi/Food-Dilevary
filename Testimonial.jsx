import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Discover how easy it is to order delicious meals with our simple and user-friendly 
        platform. In the 'How to Work' section, we guide you through the seamless process of 
        placing an order. From browsing our diverse menu to customizing your preferences, 
        selecting payment options, and tracking your delivery in real-time, we've streamlined 
        every step to ensure a hassle-free and delightful experience. Whether you're a 
        first-time user or a seasoned foodie, getting your favorite dishes delivered to your 
        doorstep has never been this straightforward."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
       
          
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Buddhi Senarathna</h2>
      </div>
    </div>
  );
};

export default Testimonial;