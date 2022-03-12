import React from 'react'
import Dash from '../../components/Dash'
import Dashboard from '../../components/Dash'
import IndividExe from '../../components/IndividExe'
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

const Exerciselist = () => {
  return (
    <div>
    <Dash />
    <Container style = {{marginLeft : 320, marginTop:100}}>
    <HStack w="1000px" spacing={30} style = {{marginBottom:50}}>
            <IndividExe />
            <IndividExe />
    </HStack>
    <HStack w="1000px" spacing={30} style = {{marginTop:20}}>
            <IndividExe />
            <IndividExe/>
    </HStack>
    </Container>
    </div>
  )
}

export default Exerciselist