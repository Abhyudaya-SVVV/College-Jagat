import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import "../style/navbar1.scss";

const navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            College Jagat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-sicon"><i class='bx bx-menu'></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newsfeed">
                  Latest News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/academiccalender">
                      Academic Calender
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/busboard">
                      Bus Board
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/newsfeed">
                      News Feed
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events">
                      Clubs And Events
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lostandfound">
                      Lost And Found
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/attendancecalc">
                      Calculate Attendance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/communitychat">
                      Community Chat
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/feedbackform">
                      Feedback
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button id="dash-btn">Dashboard</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar1;
