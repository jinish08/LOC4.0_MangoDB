import {
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Heading,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ArrowRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Webcam from "react-webcam";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
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
import { useNavigate } from "react-router-dom";

const Exercise1 = () => {
  const [renderedStreamDuration, setRenderedStreamDuration] =
    useState("00:00:00");

  const navigate = useNavigate();

  const handleClickNext = () => {
    return navigate(`/cricket/e3`);
  };

  const handleClickBack = () => {
    return navigate(`/cricket/exercise`);
  };

  return (
    <>
      <Container maxW="container.xl" bgColor="rgb(221 221 221)">
        <HStack spacing={800}>
          <Button
            color="white"
            m="5"
            bgColor="#92A3FD"
            _hover={{ bg: "#C58BF2" }}
            onClick={handleClickBack}
          >
            <ChevronLeftIcon />
            Back
          </Button>
          <Button
            color="white"
            m="5"
            bgColor="#92A3FD"
            _hover={{ bg: "#C58BF2" }}
            textAlign="right"
            onClick={handleClickNext}
          >
            Go to next excerise
            <ArrowRightIcon />
          </Button>
        </HStack>
        <HStack w="full" h="full" p={10} spacing={10} align="flex-start">
          <VStack px="40px">
            <Image w="lg" src="http://localhost:3000/assets/exe1.gif" />
            <Container
              className="timer-display"
              textAlign="center"
              fontSize="3xl"
            >
              {renderedStreamDuration}
            </Container>

            <TimerController
              renderedStreamDuration={renderedStreamDuration}
              setRenderedStreamDuration={setRenderedStreamDuration}
            />
          </VStack>
          <VStack justifyContent="center" w="md">
            <Webcam videoConstraints={{ width: 1280, height: 720 }} />
            <Heading p="10px" m="10px">
              Instructions:{" "}
            </Heading>
            <UnorderedList p="10px" m="10px" color="">
              <ListItem>Stand with your feet shoulder-width apart.</ListItem>
              <ListItem>
                Start by doing a regular squat, engage your core, and jump up
                explosively.
              </ListItem>
              <ListItem>
                When you land, lower your body back into the squat position to
                complete one rep. Make sure you land with your entire foot on
                the ground.
              </ListItem>
              <ListItem>
                Be sure to land as quietly as possible, which requires control.
              </ListItem>
            </UnorderedList>
          </VStack>
        </HStack>
      </Container>
    </>
  );
};

const TimerController = ({
  renderedStreamDuration,
  setRenderedStreamDuration,
}) => {
  const { currentUser } = useAuth();

  const uid = currentUser?.uid;
  console.log(uid);

  const minutes = renderedStreamDuration.slice(3, 5);
  console.log(parseInt(minutes));

  const d = new Date();
  let day = d.getDay();
  console.log(day);

  let cricObj = {};

  const updateTime = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("user_id", "==", uid));
      const querySnapshot = await getDocs(q);
      const userID = querySnapshot.docs[0].id;
      console.log(userID);
      const userDoc = doc(db, "users", userID);
      const docSnap = await getDoc(userDoc);
      console.log(docSnap.data().cricket);
      cricObj = docSnap.data().cricket;
      let x = cricObj.E2[day] + parseInt(minutes);
      cricObj.E2[day] = parseInt(x);
      console.log(cricObj);
      const min = docSnap.data().minutes;
      const level = docSnap.data().level;
      const poin = docSnap.data().points;
      await updateDoc(userDoc, {
        cricket: cricObj,
        minutes: min + parseInt(minutes),
        points: poin + parseInt(minutes) * parseInt(level),
      });
      console.log(docSnap.data().cricket);
    } catch (error) {
      console.log(error);
    }
  };

  const streamDuration = useRef(0),
    previousTime = useRef(0),
    requestAnimationFrameId = useRef(null),
    [isStartTimer, setIsStartTimer] = useState(false),
    [isStopTimer, setIsStopTimer] = useState(false),
    [isPauseTimer, setIsPauseTimer] = useState(false),
    [isResumeTimer, setIsResumeTimer] = useState(false),
    isStartBtnDisabled = isPauseTimer || isResumeTimer || isStartTimer,
    isStopBtnDisabled = !(isPauseTimer || isResumeTimer || isStartTimer),
    isPauseBtnDisabled = !(isStartTimer || (!isStartTimer && isResumeTimer)),
    isResumeBtnDisabled = !isPauseTimer;

  const updateTimer = useCallback(() => {
    let now = performance.now();
    let dt = now - previousTime.current;

    if (dt >= 1000) {
      streamDuration.current = streamDuration.current + Math.round(dt / 1000);
      const formattedStreamDuration = new Date(streamDuration.current * 1000)
        .toISOString()
        .substr(11, 8);
      setRenderedStreamDuration(formattedStreamDuration);
      previousTime.current = now;
    }
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, []);

  const startTimer = useCallback(() => {
    previousTime.current = performance.now();
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, [updateTimer]);

  useEffect(() => {
    if (isStartTimer && !isStopTimer) {
      startTimer();
    }
    if (isStopTimer && !isStartTimer) {
      streamDuration.current = 0;
      cancelAnimationFrame(requestAnimationFrameId.current);
      setRenderedStreamDuration("00:00:00");
    }
  }, [isStartTimer, isStopTimer, startTimer]);

  const startHandler = () => {
    setIsStartTimer(true);
    setIsStopTimer(false);
  };

  const stopHandler = async () => {
    setIsStopTimer(true);
    setIsStartTimer(false);
    setIsPauseTimer(false);
    setIsResumeTimer(false);
    await updateTime();
  };

  const pauseHandler = () => {
    setIsPauseTimer(true);
    setIsStartTimer(false);
    setIsResumeTimer(false);
    cancelAnimationFrame(requestAnimationFrameId.current);
  };

  const resumeHandler = () => {
    setIsResumeTimer(true);
    setIsPauseTimer(false);
    startTimer();
  };

  return (
    <Container className="timer-controller-wrapper">
      <Container className="buttons-wrapper">
        <Button
          bgColor="#92A3FD"
          color="white"
          _hover={{ bg: "#C58BF2" }}
          p="10px"
          m="10px"
          size="lg"
          onClick={startHandler}
          disabled={isStartBtnDisabled}
          className={`timer-controller-btn ${
            isStartBtnDisabled ? "disabled" : ""
          }`}
        >
          start
        </Button>
        <Button
          bgColor="#92A3FD"
          color="white"
          _hover={{ bg: "#C58BF2" }}
          p="10px"
          m="10px"
          size="lg"
          className={`timer-controller-btn danger ${
            isStopBtnDisabled ? "disabled" : ""
          }`}
          disabled={isStopBtnDisabled}
          onClick={stopHandler}
        >
          stop
        </Button>
        <Button
          bgColor="#92A3FD"
          color="white"
          _hover={{ bg: "#C58BF2" }}
          p="10px"
          m="10px"
          size="lg"
          className={`timer-controller-btn ${
            isPauseBtnDisabled ? "disabled" : ""
          }`}
          disabled={isPauseBtnDisabled}
          onClick={pauseHandler}
        >
          pause
        </Button>
        <Button
          bgColor="#92A3FD"
          color="white"
          _hover={{ bg: "#C58BF2" }}
          p="10px"
          m="10px"
          size="lg"
          className={`timer-controller-btn ${
            isResumeBtnDisabled ? "disabled" : ""
          }`}
          disabled={isResumeBtnDisabled}
          onClick={resumeHandler}
        >
          resume
        </Button>
      </Container>
    </Container>
  );
};

export default Exercise1;
