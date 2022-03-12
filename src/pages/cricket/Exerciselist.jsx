import React from "react";
import Dash from "../../components/Dash";
import IndividExe from "../../components/IndividExe";
import { HStack, Container } from "@chakra-ui/react";

const Exerciselist = () => {
  return (
    <div>
      <Dash />
      <Container style={{ marginLeft: 320, marginTop: 150 }}>
        <HStack p="20px" w="1000px" spacing={30} style={{ marginBottom: 50 }}>
          <IndividExe exername="Running" desc="Running is important for any athlete" imgURL="http://localhost:3000/assets/exe1.gif"/>
          <IndividExe exername="Squats" desc="Squats is important for any athlete" imgURL="http://localhost:3000/assets/exe1.gif"/>
        </HStack>
        <HStack p="20px" w="1000px" spacing={30} style={{ marginTop: 20 }}>
          <IndividExe exername="Bowling" desc="Bowling is important for any cricketer" imgURL="http://localhost:3000/assets/exe1.gif"/>
          <IndividExe exername="Batting" desc="Batting is important for any cricketer" imgURL="http://localhost:3000/assets/exe1.gif"/>
        </HStack>
      </Container>
    </div>
  );
};

export default Exerciselist;
