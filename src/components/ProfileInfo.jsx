import React, { useEffect ,useState } from "react";
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
} from "@chakra-ui/react";
import {
  collection,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  increment,
} from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";

function ProfileInfo() {
  const [level, setLevel] = useState(0);

  const { currentUser } = useAuth();

  const uid = currentUser?.uid;
  console.log(uid);

  const d = new Date();
  let day = d.getDay();

  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);
  const [day3, setDay3] = useState(0);
  const [day4, setDay4] = useState(0);
  const [day5, setDay5] = useState(0);
  const [day6, setDay6] = useState(0);
  const [day7, setDay7] = useState(0);

  useEffect(() => {
    const getLevel = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const docSnap = await getDoc(userDoc);
        setLevel(docSnap.data().level);
        console.log(level);
      } catch (error) {
        console.log(error);
      }
    };
    const updateLevel = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const docSnap = await getDoc(userDoc);
        setDay1(docSnap.data().cricket.E1[0] + docSnap.data().cricket.E2[0] + docSnap.data().cricket.E3[0] + docSnap.data().cricket.E4[0])
        setDay2(docSnap.data().cricket.E1[1] + docSnap.data().cricket.E2[1] + docSnap.data().cricket.E3[1] + docSnap.data().cricket.E4[1])
        setDay3(docSnap.data().cricket.E1[2] + docSnap.data().cricket.E2[2] + docSnap.data().cricket.E3[2] + docSnap.data().cricket.E4[2])
        setDay4(docSnap.data().cricket.E1[3] + docSnap.data().cricket.E2[3] + docSnap.data().cricket.E3[3] + docSnap.data().cricket.E4[3])
        setDay5(docSnap.data().cricket.E1[4] + docSnap.data().cricket.E2[4] + docSnap.data().cricket.E3[4] + docSnap.data().cricket.E4[4])
        setDay6(docSnap.data().cricket.E1[5] + docSnap.data().cricket.E2[5] + docSnap.data().cricket.E3[5] + docSnap.data().cricket.E4[5])
        setDay7(docSnap.data().cricket.E1[6] + docSnap.data().cricket.E2[6] + docSnap.data().cricket.E3[6] + docSnap.data().cricket.E4[6])
        const exeArr = [day1, day2, day3, day4, day5, day6, day7];
        for(let i = 0 ; i< 7;i++){
          if(exeArr[i]<=15){
            setLevel(1);
            await updateDoc(userDoc, {
              level: 1,
            });
            break;
          } 
          else if(exeArr[i]>15 && exeArr[i]<=30){
            setLevel(2);
            await updateDoc(userDoc, {
              level: 2,
            });
            break;
          }
          else {
            setLevel(3);
            await updateDoc(userDoc, {
              level: 3,
            });
            break;
          }
        }

      } catch (error) {
        console.log(error);
      }
    }
    getLevel();
    updateLevel();
  }, [day,level]);

  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger className="buttonClass">
            <Button
              bgColor="#f5f5f5ff"
              color="#3E497A"
              _hover={{ color: "#3E497A", bg: "white" }}
            >
              Profile{" "}
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              zIndex="2"
              position="absolute"
              right="-20"
              top="50"
              bg="#3E497A"
              color="white"
            >
              <PopoverHeader textAlign="center" p="5">
                Hello World
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody textAlign="center" p="5">
                <HStack justifyContent="center" spacing={5}>
                  <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                    <Box>{level}</Box>
                    <Box>Level</Box>
                  </VStack>
                  <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                    <Box>15</Box>
                    <Box>Mins</Box>
                  </VStack>
                  <VStack border="2px solid #21325E" bgColor="#21325E" p="5">
                    <Box>20</Box>
                    <Box>Points</Box>
                  </VStack>
                </HStack>
              </PopoverBody>
              <PopoverFooter textAlign="center"></PopoverFooter>
              <HStack justifyContent="center" spacing={30} marginBottom="3.5">
                <Button
                  bgColor="white"
                  color="#3E497A"
                  size="sm"
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}
                  w="20"
                  my="2"
                  _hover={{ bg: "white", color: "#3E497A" }}
                >
                  Redeem
                </Button>
                <Button
                  bgColor="white"
                  color="#3E497A"
                  size="sm"
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}
                  w="20"
                  mx="125"
                  my="2"
                  _hover={{ bg: "white", color: "#3E497A" }}
                >
                  Sign Out
                </Button>
              </HStack>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default ProfileInfo;
