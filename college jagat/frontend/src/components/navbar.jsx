import React, { useState, useRef } from "react";
// import { Link, a } from "react-router-dom";
import "../style/navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const navbar = () => {

  return (
    <>
      <nav className="nav-header">
  <div className="logo">
    <a href="#">College Jagat</a>
  </div>
  <div className="navlinks">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Abhyudaya</a></li>
      <li><a href="#">Contact</a></li>
      <li>
        <a href="#">Menu</a>
        <ul className="submenu" id="submenu">
          <li><a href="#">Academic Calendar</a></li>
          <li><a href="#">News Feed</a></li>
          <li><a href="#">Bus Board</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Lost and Found</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="btn-wrapper">
    <button>Dashboard</button>
  </div>
</nav>

    </>
  );
};

export default navbar;
