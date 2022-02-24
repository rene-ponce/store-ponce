import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUOSCMpxcMZwvm46M5Z_R6STwuKRgf0Xs",
  authDomain: "jaibita-sport.firebaseapp.com",
  projectId: "jaibita-sport",
  storageBucket: "jaibita-sport.appspot.com",
  messagingSenderId: "1031744491812",
  appId: "1:1031744491812:web:af7266b041349b556223b1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);