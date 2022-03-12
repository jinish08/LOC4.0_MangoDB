import React from "react";
import {
  VStack,
  HStack,
  Text,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";
import "../styles/IndividExe.css";

const IndividExe = () => {
  return (
    <Container w="400px" className="cardProperty" bgColor="#f5f5f5">
      <HStack justifyContent="flex-start">
        <Image
          src="http://localhost:3000/assets/exe1.gif"
          alt="jdfln"
          width="100px"
          height="100px"
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
