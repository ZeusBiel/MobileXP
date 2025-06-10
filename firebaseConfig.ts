import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtpzL7eqTm_MUJBJmRpKUIuppDHYbwYF0",
  authDomain: "challengex-93ce3.firebaseapp.com",
  projectId: "challengex-93ce3",
  storageBucket: "challengex-93ce3.firebasestorage.app",
  messagingSenderId: "404316698053",
  appId: "1:404316698053:web:4daa87980487234ea587ac",
  measurementId: "G-7R0SGGCNYC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);