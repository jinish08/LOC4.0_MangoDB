import React from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
import "../styles/IndividExe.css"
import { ArrowRightIcon } from "@chakra-ui/icons";

const IndividExe = () => {
  return (
    <Container className="cardProperty">
      <HStack justifyContent="flex-start">
        <img src="http://localhost:3000/assets/running.png"
          alt="jdfln" width="100px" height="100px"
        />
        <VStack alignItems="left">
          <Heading>Running</Heading>
          <Text>Running is important for any athlete</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default IndividExe;
