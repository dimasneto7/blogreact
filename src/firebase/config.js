import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9wlV9QZy-vomkq1OYErhMhn-_GM_wOvw",
  authDomain: "blog-fed6e.firebaseapp.com",
  projectId: "blog-fed6e",
  storageBucket: "blog-fed6e.appspot.com",
  messagingSenderId: "273432131992",
  appId: "1:273432131992:web:9ff2c12ee78e98429c93ed",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyB1TYaDi-uulN1OQr8Mss4TXmAsyqCnDG8",
//   authDomain: "blogreact-fc78b.firebaseapp.com",
//   projectId: "blogreact-fc78b",
//   storageBucket: "blogreact-fc78b.appspot.com",
//   messagingSenderId: "185504056382",
//   appId: "1:185504056382:web:b57b6a7046fb2a6453fd6f",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };
