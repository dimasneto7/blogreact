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
