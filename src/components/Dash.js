import React from "react";
import "../styles/dashboard.css";
import ProfileInfo from "./ProfileInfo";
import { Link } from "react-router-dom";

const Dash = () => {
  return (
    <>
      <section id="header">
        <nav class="navbar bg-info navbar-info  fixed-top">
          <div class="container-fluid">
            <a href="" class="navbar-brand brand">
              Dashboard
            </a>

            <ProfileInfo />
          </div>
        </nav>
      </section>
      <div id="side-bar" style={{ zIndex: "-1" }}>
        <div class="side-bar">
          <ul class="nav flex-column">
            <li class="nav-item top-item">
              <Link
                class="nav-link sidebar-link active"
                aria-current="page"
                to="/"
              >
                <i class="fa-solid fa-house"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link sidebar-link" to="/cricket/exercise">
                <i class="fa-solid fa-dumbbell"></i>&nbsp;&nbsp;&nbsp;Exercise
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link sidebar-link" to="/">
                <i class="fa-solid fa-y"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link sidebar-link" to="">
                <i class="fa-solid fa-c"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cricket
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link sidebar-link" to="#">
                &nbsp;<i class="fa-solid fa-r"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;Rewards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dash;
