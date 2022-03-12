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
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from "react";

const Exercise1 = () => {
  return (
    <>
      <Container maxW="container.xl" p="10">
        <Button m="20px">Back</Button>
        <HStack w="full" h="full" p={10} spacing={10} align="flex-start">
          <VStack px="40px">
            <Image
              w="sm"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <HStack>
              <Button>Play</Button>
              <Text>00:00</Text>
              <Button>Pause</Button>
            </HStack>
            <Button>End Exercise</Button>
          </VStack>
          <VStack justifyContent="center" w="md">
            <Heading>Instructions: </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Button size="md" p="25px">Go to next excerise<ArrowRightIcon /></Button>
          </VStack>
        </HStack>
      </Container>
    </>
  );
};

export default Exercise1;
