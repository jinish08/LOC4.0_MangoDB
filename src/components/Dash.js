import React from "react";
import {
  VStack,
  HStack,
  Text,
  Image,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react";
import "../styles/dashboard.css";
import ProfileInfo from "./ProfileInfo";
import { withTheme } from "@emotion/react";

const Dash = () => {
  return (
    <>
      <section id="header">
        <nav class="navbar bg-info navbar-info  fixed-top">
          <div class="container-fluid">
            <a href="" class="navbar-brand brand">
              Dashboard
            </a>
       
              <ProfileInfo/>
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
                <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-c"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cricket
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-y"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link sidebar-link" href="#">
                <i class="fa-solid fa-dumbbell"></i>&nbsp;&nbsp;&nbsp;Exercise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dash;
