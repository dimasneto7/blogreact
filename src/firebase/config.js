import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqDTYZHYaaKeosnFFK-Tue9VScQMy_YD8",
  authDomain: "miniblog-14412.firebaseapp.com",
  projectId: "miniblog-14412",
  storageBucket: "miniblog-14412.appspot.com",
  messagingSenderId: "604927384287",
  appId: "1:604927384287:web:b271f814016d6d3d11676a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
