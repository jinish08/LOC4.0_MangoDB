import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "@firebase/auth";
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

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  level: 1,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const levelUp = async (lvl) => {
    const uid = currentUser?.uid;
    try{
      const userRef = collection(db, "users");
      const q = query(userRef, where("user_id", "==", uid));
      const querySnapshot = await getDocs(q);
      const userID = querySnapshot.docs[0].id;
      console.log(userID);
      const userDoc = doc(db, "users", userID);
      const docSnap = await getDoc(userDoc);
      console.log(docSnap.data().level);
      await updateDoc(userDoc, {
        level: lvl,
      });
      console.log(docSnap.data().level);
    } catch (err) {
      console.log(err);
    }

    return setLevel(level+1)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
    level,
    levelUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
