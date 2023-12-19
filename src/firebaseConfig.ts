import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyNXqm9P21YsXe92rcvYO9MZkFLZhg-ks",
  authDomain: "iestpchupa2023-2.firebaseapp.com",
  projectId: "iestpchupa2023-2",
  storageBucket: "iestpchupa2023-2.appspot.com",
  messagingSenderId: "737301690495",
  appId: "1:737301690495:web:6959253430c806c33a674a"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };