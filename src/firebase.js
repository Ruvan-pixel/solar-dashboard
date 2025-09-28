import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBLvhatYXqJiHKi_FKnuB-stiK5L0tzsSo",
  authDomain: "solar-dashboard-287be.firebaseapp.com",
  projectId: "solar-dashboard-287be",
  storageBucket: "solar-dashboard-287be.firebasestorage.app",
  messagingSenderId: "277321608391",
  appId: "1:277321608391:web:33ba29dd6b02ee82d322e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
