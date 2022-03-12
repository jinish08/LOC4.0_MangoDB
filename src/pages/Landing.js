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
      <HStack justifyContent="space-evenly" mt="-36">
        <VStack spacing={"60px"}>
          <VStack mt="-20" spacing={"20px"}>
            <Heading size={"4xl"}>Already have</Heading>
            <Text fontSize={"xl"}>This is a temporary statement</Text>
          </VStack>
            <HStack spacing={"24px"}>
              <Button
              style={{ background: "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)"}}
              colorScheme="blue"
              onClick={handleLogin}
              w="56"
              rounded="full">
              <HStack>
                <FiLogIn />
                <Text>&nbsp;&nbsp;Login</Text>
              </HStack>
            </Button>
            <Button
              style={{ background: "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)"}}
              onClick={handleSign}
              w="56"
              rounded="full"
              color="white">
              <FiLogIn />
              &nbsp;&nbsp;&nbsp;
              Signup
          </Button>
            </HStack>
          
        </VStack>
        <Image boxSize="470px" src="assets/hero.svg" alt="Hero" />
      </HStack>
      
      <Login loginin={loginin} handleLogin={handleLogin} />
      <Signup sign={sign} handleSign={handleSign} />
    </>
  );
};

export default Landing;
