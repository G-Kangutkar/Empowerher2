// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsgSIREKRbFULIkjxRkm3TOJD9bo8nlvs",
  authDomain: "todomanager-33435.firebaseapp.com",
  databaseURL: "https://todomanager-33435-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todomanager-33435",
  storageBucket: "todomanager-33435.firebasestorage.app",
  messagingSenderId: "1022876371074",
  appId: "1:1022876371074:web:50acfe00ac42ab79174c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getDatabase(app);

export default app;