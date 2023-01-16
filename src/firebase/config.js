import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1TYaDi-uulN1OQr8Mss4TXmAsyqCnDG8",
  authDomain: "blogreact-fc78b.firebaseapp.com",
  projectId: "blogreact-fc78b",
  storageBucket: "blogreact-fc78b.appspot.com",
  messagingSenderId: "185504056382",
  appId: "1:185504056382:web:b57b6a7046fb2a6453fd6f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
