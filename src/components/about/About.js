/** @format */

import "./About.css";
import ımageSort from "../../assets/image.png";

import React, { useState} from "react";
import Education from "./Education";
import Languages from "./Languages";

const About = () => {
  const [filterAbout, setFilterAbout] = useState("ABOUT");
  
  return (
    <>
      <div id='container'>
        <div className='col'>
          <button
            className={`btn ${filterAbout === "ABOUT" ? "btn" : ""}`}
            onClick={() => setFilterAbout("ABOUT")}>
            About
          </button>
          <button
            className={`btn ${filterAbout === "SKILLS" ? "btn" : ""}`}
            onClick={() => setFilterAbout("SKILLS")}>
            Skills
          </button>
          <button
            className={`btn ${filterAbout === "LANGUAGES" ? "btn" : ""}`}
            onClick={() => setFilterAbout("LANGUAGES")}>
            Languages
          </button>
        </div>
        <div className='col-two'>
          {filterAbout === "ABOUT" && (
            <div>
              <img src={ımageSort} className='image-sort' />
            </div>
          )}
          {filterAbout === "SKILLS" && <Education />}
          {filterAbout === "LANGUAGES" && <Languages />}
        </div>
      </div>
    </>
  );
};

export default About;
