import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe-WQJuYwiQu-gel2QWW-bAoKv5RsuZDk",
  authDomain: "whatsapp-clone-4bcc4.firebaseapp.com",
  projectId: "whatsapp-clone-4bcc4",
  storageBucket: "whatsapp-clone-4bcc4.appspot.com",
  messagingSenderId: "72060731957",
  appId: "1:72060731957:web:b4f125dbccef2c09caa77c",
  measurementId: "G-RRYR0RF5VX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
