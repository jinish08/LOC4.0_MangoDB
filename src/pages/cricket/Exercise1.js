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
import { ArrowRightIcon } from "@chakra-ui/icons";
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
            <TimerController />
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
            <Button size="md" p="25px">
              Go to next excerise
              <ArrowRightIcon />
            </Button>
          </VStack>
        </HStack>
      </Container>
    </>
  );
};

const TimerController = () => {

  const [renderedStreamDuration, setRenderedStreamDuration] =
  useState("00:00:00");

  const { currentUser } = useAuth();

  const uid = currentUser?.uid;
  console.log(uid);

  const minutes = renderedStreamDuration.slice(3,5);
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
      let x = cricObj.E1[day] + parseInt(minutes);
      cricObj.E1[day] = parseInt(x);
      console.log(cricObj);
      await updateDoc(userDoc, {
        cricket: cricObj,
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

  const stopHandler = async() => {
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
    <div className="timer-controller-wrapper">
      <div className="timer-display">{renderedStreamDuration}</div>
      <div className="buttons-wrapper">
        <button
          onClick={startHandler}
          disabled={isStartBtnDisabled}
          className={`timer-controller-btn ${
            isStartBtnDisabled ? "disabled" : ""
          }`}
        >
          start
        </button>
        <button
          className={`timer-controller-btn danger ${
            isStopBtnDisabled ? "disabled" : ""
          }`}
          disabled={isStopBtnDisabled}
          onClick={stopHandler}
        >
          stop
        </button>
        <button
          className={`timer-controller-btn ${
            isPauseBtnDisabled ? "disabled" : ""
          }`}
          disabled={isPauseBtnDisabled}
          onClick={pauseHandler}
        >
          pause
        </button>
        <button
          className={`timer-controller-btn ${
            isResumeBtnDisabled ? "disabled" : ""
          }`}
          disabled={isResumeBtnDisabled}
          onClick={resumeHandler}
        >
          resume
        </button>
      </div>
    </div>
  );
};

export default Exercise1;
