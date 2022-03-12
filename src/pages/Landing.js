import {
  Button,
  Container,
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
      <HStack justifyContent="space-evenly" mt="-32">
        <VStack >
            <Text>Already have an account?</Text>
          <Button
            style={{ background: "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)"}}
            colorScheme="blue"
            onClick={handleLogin}
            w="80"
            rounded="full"
          >
            <HStack>
              <FiLogIn />
              <Text>Login</Text>
            </HStack>
          </Button>
          <Text>New Here?</Text>
          <Button
            style={{ background: "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)"}}
            onClick={handleSign}
            w="80"
            rounded="full"
            color="white"
          >
            <FiLogIn />
            Signup
          </Button>
        </VStack>
        <Image boxSize="470px" src="assets/hero.svg" alt="Hero" />
      </HStack>
      <Login loginin={loginin} handleLogin={handleLogin} />
      <Signup sign={sign} handleSign={handleSign} />
    </>
  );
};

export default Landing;
