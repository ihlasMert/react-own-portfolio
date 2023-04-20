/** @format */

import React from "react";
import image from "../../assets/image.png";
import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <section className='home'>
      <div className='left' id='typed-string'>
        <div className='text'>
          I am a web developer. I have one year experience in forntend
          developer. I have also React Native experience. 
        </div>
        <div className='btns'>
          <button className='hire-me'>Hire Me</button>
          <button className='contact'>Contact With Me</button>
        </div>
      </div>
      <div className='right'>
        <img src={image} />
      </div>
    </section>
  );
};

export default HeaderSection;
