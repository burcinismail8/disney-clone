import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpcUN7v9xiCi3Ki-vEUVXLOcP4J8COYPs",
  authDomain: "disneyplus-clone-5d218.firebaseapp.com",
  projectId: "disneyplus-clone-5d218",
  storageBucket: "disneyplus-clone-5d218.appspot.com",
  messagingSenderId: "947935362986",
  appId: "1:947935362986:web:254e1cce8a2d78bb3a75d3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, storage };
export default db;
