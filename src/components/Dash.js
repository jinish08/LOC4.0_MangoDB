import React from "react";
import "../styles/dashboard.css";

const Dash = () => {
  return (
    <>
      <section id="header">
        <nav class="navbar bg-info navbar-info">
          <div class="container-fluid">
            <a href="" class="navbar-brand brand">
              Dashboard
            </a>
          </div>
        </nav>
      </section>
      <div id="side-bar" style={{ zIndex: "-1" }}>
        <div class="side-bar">
          <ul class="nav flex-column">
            <li class="nav-item top-item">
              <a
                class="nav-link sidebar-link active"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-c"></i>&nbsp;&nbsp;Cricket
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-y"></i>&nbsp;&nbsp;Yoga
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-dumbbell"></i>&nbsp;&nbsp;Exercise
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="chart">
      </div>
    </>
  );
};

export default Dash;
