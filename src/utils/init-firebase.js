// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB19gD3bEsm8h9WL6BLZd-Z5h5Kq2sWT_0",
  authDomain: "my-personal-coach-63ae3.firebaseapp.com",
  projectId: "my-personal-coach-63ae3",
  storageBucket: "my-personal-coach-63ae3.appspot.com",
  messagingSenderId: "921346552342",
  appId: "1:921346552342:web:b2c98a354b42ada6a27b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);