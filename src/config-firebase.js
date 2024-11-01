import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsWbD6SUS7uA45JfSSXJZehkoJhgJe6jw",
  authDomain: "project-reactfl.firebaseapp.com",
  projectId: "project-reactfl",
  storageBucket: "project-reactfl.firebasestorage.app",
  messagingSenderId: "673863932543",
  appId: "1:673863932543:web:e192a50f37f4065b697d4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
