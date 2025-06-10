import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEyI0iQ3JiN1PmIqU0_1ncMu5sxfvpQGI",
  authDomain: "lembremedlembre.firebaseapp.com",
  projectId: "lembremedlembre",
  storageBucket: "lembremedlembre.firebasestorage.app",
  messagingSenderId: "501858191599",
  appId: "1:501858191599:web:23025caa293aa81e3ef31a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
