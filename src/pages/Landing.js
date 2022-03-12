import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "../components/Landing/Login";
import Signup from "../components/Landing/Signup";
import { FiLogIn } from "react-icons/fi";
import "../styles/landing.css"
// import Footer from "../components/Footer";

const Landing = () => {
  const [sign, setSign] = useState(false);
  const [loginin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!loginin);
  };

  const handleSign = () => {
    setSign(!sign);
  };

  return (
    <>
      <img src="assets/landing-bg.png" alt="topimg" width="100%" />
      <HStack justifyContent="space-evenly" mt="-300" height={"100vh"}>
        <VStack spacing={"60px"}>
          <VStack mt="-20" spacing={"20px"}>
            <Heading size={"4xl"}>Already have</Heading>
            <Text fontSize={"xl"}>This is a temporary statement</Text>
          </VStack>
          <HStack spacing={"24px"}>
            <Button
              style={{
                background:
                  "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)",
              }}
              colorScheme="blue"
              onClick={handleLogin}
              w="56"
              rounded="full"
            >
              <HStack>
                <FiLogIn />
                <Text>&nbsp;&nbsp;Login</Text>
              </HStack>
            </Button>
            <Button
              style={{
                background:
                  "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)",
              }}
              onClick={handleSign}
              w="56"
              rounded="full"
              color="white"
            >
              <FiLogIn />
              &nbsp;&nbsp;&nbsp; Signup
            </Button>
          </HStack>
        </VStack>
        <Image boxSize="470px" src="assets/hero.svg" alt="Hero" />
      </HStack>
      <div className="d-flex justify-content-start contain-cards contain-cards-start">
        <div className="card mb-3 bootstrap-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Track Your Goal</h5>
                <p className="card-text">
                Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end contain-cards contain-cards-end">
        <div className="card mb-3 bootstrap-card">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Exercise and Burn Up</h5>
                <p className="card-text">
                Let’s keep burning, to achieve yours goals, it hurts only temporarily, if you give up now you will be in pain forever
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 bootstrap-card-two">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Get Video Assistance</h5>
              <p className="card-text">
              Aren’t sure if you are doing the exercise properly? 
              Worry not!
              We’ve got complete video assistance from where you can get help in following the routine
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end contain-cards contain-cards-end">
        <div className="card mb-3 bootstrap-card-two">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Get Video Assistance</h5>
                <p className="card-text">
                Aren’t sure if you are doing the exercise properly? 
                Worry not!
                We’ve got complete video assistance from where you can get help in following the routine
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/hero.svg" className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}

      <Login loginin={loginin} handleLogin={handleLogin} />
      <Signup sign={sign} handleSign={handleSign} />
    </>
  );
};

export default Landing;
