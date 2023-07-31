import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdE60PbiUfT_RHFKMEwzVgeEBhARu3O9Q",
  authDomain: "municipal-project-43599.firebaseapp.com",
  projectId: "municipal-project-43599",
  storageBucket: "municipal-project-43599.appspot.com",
  messagingSenderId: "1008113170230",
  appId: "1:1008113170230:web:55265d7475e28978336597",
  measurementId: "G-43PTHYJB97",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
