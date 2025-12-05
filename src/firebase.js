// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // optional if you use images/videos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ1-um_DhaUj3HZ8TORBQ3z1qDQJGNP5o",
  authDomain: "admin-c0a62.firebaseapp.com",
  projectId: "admin-c0a62",
  storageBucket: "admin-c0a62.firebasestorage.app",
  messagingSenderId: "1099357007373",
  appId: "1:1099357007373:web:20add1a58fcefad3842f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
