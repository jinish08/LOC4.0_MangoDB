import React from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Container,
    VStack,
    HStack,
    Button,
    Portal,
    Box,
  } from '@chakra-ui/react'

  function ProfileInfo() {
    const initRef = React.useRef()
    return (
      <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger className="buttonClass">
              <Button  bgColor="#f5f5f5ff" color="#3E497A"  _hover={{color:"#3E497A", bg:"white"}}>Profile </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent zIndex='2' position="absolute" right="-20" top="50" bg="#3E497A" color="white">
                <PopoverHeader textAlign="center" p="5" >Hello World</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody textAlign="center" p="5">
                <HStack justifyContent="center" spacing={5}>
                <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                  <Box>
                    2
                  </Box>
                  <Box>
                    Level
                  </Box>
                  </VStack>
                <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                  <Box>
                    15
                  </Box>
                  <Box>
                    Mins
                  </Box>
                  </VStack>
                <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                  <Box>
                    20
                  </Box>
                  <Box>
                    Points
                  </Box>
                  </VStack>
                  </HStack>
                </PopoverBody>
                <PopoverFooter textAlign="center"></PopoverFooter>
                <HStack justifyContent="center" spacing={30} marginBottom="3.5">
                  <Button bgColor="white" color="#3E497A" 
                  size="sm"
                    mt={4}
                    colorScheme='blue'
                    onClick={onClose}
                    ref={initRef}
                    w="20"
                    my="2"
                    _hover={{bg:"white", color:"#3E497A"}}
                  >
                    Redeem
                  </Button>
                  <Button  bgColor="white" color="#3E497A" 
                  size="sm"
                    mt={4}
                    colorScheme='blue'
                    onClick={onClose}
                    ref={initRef}
                    w="20"
                    mx="125"
                    my="2"
                    _hover={{bg:"white", color:"#3E497A"}}
                  >
                    Sign Out
                  </Button>
                  </HStack>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    )
  }

export default ProfileInfo