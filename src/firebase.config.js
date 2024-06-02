import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyadTfuCSKCmgbNKk7CBtr1miIH10wMBM",
  authDomain: "online-job-portal-b0a80.firebaseapp.com",
  projectId: "online-job-portal-b0a80",
  storageBucket: "online-job-portal-b0a80.appspot.com",
  messagingSenderId: "62715443566",
  appId: "1:62715443566:web:68dc97410a1da5dab0a97f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
