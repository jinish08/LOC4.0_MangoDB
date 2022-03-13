import Chart from "./Chart";
import Chart2 from "./Chart2";
import {
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";
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
import React ,{useEffect, useState} from "react";

function FinalChart() {

  const { currentUser } = useAuth();

  const uid = currentUser?.uid;

  let E1, E2, E3, E4;
  const [exe1,setExe1] = useState(0);
  const [exe2,setExe2] = useState(0);
  const [exe3,setExe3] = useState(0);
  const [exe4,setExe4] = useState(0);

  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);
  const [day3, setDay3] = useState(0);
  const [day4, setDay4] = useState(0);
  const [day5, setDay5] = useState(0);
  const [day6, setDay6] = useState(0);
  const [day7, setDay7] = useState(0);

  const d = new Date();
  let day = d.getDay();

  useEffect(() => {
    const getData = async () => {
      try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "users", userID);
        const docSnap = await getDoc(userDoc);
        console.log(docSnap.data().cricket);
        E1 = await docSnap.data().cricket.E1[day];
        E2 = await docSnap.data().cricket.E2[day];
        E3 = await docSnap.data().cricket.E3[day];
        E4 = await docSnap.data().cricket.E4[day];
        setExe1(E1);
        setExe2(E2);
        setExe3(E3);
        setExe4(E4);
        console.log(exe1);
        console.log(docSnap.data().cricket.E1[0]);
          setDay1(docSnap.data().cricket.E1[0] + docSnap.data().cricket.E2[0] + docSnap.data().cricket.E3[0] + docSnap.data().cricket.E4[0])
          setDay2(docSnap.data().cricket.E1[1] + docSnap.data().cricket.E2[1] + docSnap.data().cricket.E3[1] + docSnap.data().cricket.E4[1])
          setDay3(docSnap.data().cricket.E1[2] + docSnap.data().cricket.E2[2] + docSnap.data().cricket.E3[2] + docSnap.data().cricket.E4[2])
          setDay4(docSnap.data().cricket.E1[3] + docSnap.data().cricket.E2[3] + docSnap.data().cricket.E3[3] + docSnap.data().cricket.E4[3])
          setDay5(docSnap.data().cricket.E1[4] + docSnap.data().cricket.E2[4] + docSnap.data().cricket.E3[4] + docSnap.data().cricket.E4[4])
          setDay6(docSnap.data().cricket.E1[5] + docSnap.data().cricket.E2[5] + docSnap.data().cricket.E3[5] + docSnap.data().cricket.E4[5])
          setDay7(docSnap.data().cricket.E1[6] + docSnap.data().cricket.E2[6] + docSnap.data().cricket.E3[6] + docSnap.data().cricket.E4[6])

          console.log(day1);
          console.log(day2);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [exe1,day1,day2,day3,day4,day5,day6,day7]);



  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" templateRows={"repeat(4, 1fr)"}>
          <GridItem>
            <Heading paddingBottom={"20px"} textAlign="center">
              Hello
            </Heading>
            <Chart day1={day1} day2={day2} day3={day3} day4={day4} day5={day5} day6={day6} day7={day7}/>
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text padding={"100px 40px"}>
              Welcome back to the daily 
            </Text>
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text margin={"120px 0 0 100px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum lobortis sollicitudin. Phasellus faucibus nisl nec
              dictum ultrices. Donec aliquam efficitur libero eu venenatis.
              Vestibulum ultrices est in erat posuere, id convallis orci
              volutpat. Sed turpis mi, dictum eget tempor eget, sodales in urna.
              Duis nec vestibulum elit, et convallis nisi. Fusce rutrum sit amet
              mi sit amet vulputate. Donec.
            </Text>
          </GridItem>
          <GridItem marginLeft={"100px"}>
            <Heading margin={"30px 0 -60px -120px"} textAlign="center">
              Hello
            </Heading>
            <Chart2 exe1={exe1} exe2={exe2} exe3={exe3} exe4={exe4}/>
          </GridItem>
          <GridItem>
            <Heading paddingBottom={"20px"} textAlign="center">
              Hello
            </Heading>
            <Chart3 />
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text padding={"100px 40px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum lobortis sollicitudin. Phasellus faucibus nisl nec
              dictum ultrices. Donec aliquam efficitur libero eu venenatis.
              Vestibulum ultrices est in erat poas14314suere, id convallis orci
              volutpat. Sed turpis mi, dictum eget tempor eget, sodales in urna.
              Duis nec vestibulum elit, et convallis nisi. Fusce rutrum sit amet
              mi sit amet vulputate. Donec.
            </Text>
          </GridItem>
          <GridItem w={"600px"} textAlign="center">
            <Text margin={"120px 0 0 100px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum lobortis sollicitudin. Phasellus faucibus nisl nec
              dictum ultrices. Donec aliquam efficitur libero eu venenatis.
              Vestibulum ultrices est in erat posuere, id convallis orci
              volutpat. Sed turpis mi, dictum eget tempor eget, sodales in urna.
              Duis nec vestibulum elit, et convallis nisi. Fusce rutrum sit amet
              mi sit amet vulputate. Donec.
            </Text>
          </GridItem>
          <GridItem marginLeft={"100px"}>
            <Heading margin={"30px 0 -60px -120px"} textAlign="center">
              Hello
            </Heading>
            <Chart4 />
          </GridItem>
          
      </Grid>
    </>
  );
}
export default FinalChart;
