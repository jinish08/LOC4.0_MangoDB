import React from "react";
import Dash from "../../components/Dash";
import IndividExe from "../../components/IndividExe";
import { HStack, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Exerciselist = () => {

  const navigate = useNavigate();



  return (
    <div>
      <Dash />
      <Container style={{ marginLeft: 320, marginTop: 150 }}>
        <HStack p="20px" w="1000px" spacing={30} style={{ marginBottom: 50 }}>
          <IndividExe exername="Skipping" desc="Skipping is important for any cricketer" imgURL="http://localhost:3000/assets/skipping2.gif" className="cards-exercise" route="e1"/>
        
          <IndividExe exername="Squats" desc="Squats are important for any athlete" imgURL="http://localhost:3000/assets/exe1.gif" className="cards-exercise"/>
        </HStack>
        <HStack p="20px" w="1000px" spacing={30} style={{ marginTop: 20 }}>
          <IndividExe exername="PushUps" desc="PushUps are important for any cricketer" imgURL="http://localhost:3000/assets/pushups.gif" className="cards-exercise"/>
          <IndividExe exername="Running" desc="Running is important for any athlete" imgURL="http://localhost:3000/assets/replace.gif" className="cards-exercise"/>
        </HStack>
      </Container>
    </div>
  );
};

export default Exerciselist;
