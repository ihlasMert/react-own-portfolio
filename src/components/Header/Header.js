/** @format */

import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div href='logo' className='logo'>
        İhlas
      </div>
      <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#portfolio'>About Me</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#contact'>Form</a>
          </li>
        </ul>
      </nav>
      <div>Dark Mode</div>
    </header>
  );
};

export default Header;
