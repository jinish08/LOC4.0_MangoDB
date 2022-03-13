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
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/init-firebase";

const Level = () => {
  const { level, levelUp } = useAuth();
  const { currentUser } = useAuth();

  const uid = currentUser?.uid;

  let E1, E2, E3, E4;
  const [exe1, setExe1] = useState(0);

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
        E1 = await docSnap.data().cricket.E1;
        setExe1(E1);
        console.log(exe1);
        // E2 = docSnap.data().cricket.E2[day];
        // E3 = docSnap.data().cricket.E3[day];
        // E4 = docSnap.data().cricket.E4[day];
      } catch (error) {
        console.log(error);
        console.log(uid);
      }
    };
    getData();
  }, [level]);
  let lvl;

//   useEffect(async () => {
//     for (let index = 0; index < 7; index++) {
//         if (exe1[index] < 15) {
//           lvl = 1;
//           break;
//         } else if (exe1[index] < 30) {
//           lvl = 2;
//           break;
//         } else {
//           lvl = 3;
//         }
//       }
//       try {
//         await levelUp(lvl);
//       } catch (e) {
//         console.log(e);
//       }
//   }, [])

  const incLevel = async () => {
    for (let index = 0; index < 7; index++) {
      if (exe1[index] < 15) {
        lvl = 1;
        break;
      } else if (exe1[index] < 30) {
        lvl = 2;
        break;
      } else {
        lvl = 3;
      }
    }
    try {
      await levelUp(lvl);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>{level}</h1>
      <button onClick={incLevel}>Add Level</button>
    </div>
  );
};

export default Level;
