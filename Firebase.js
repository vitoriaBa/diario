import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClo7o0dM_njpMsptr2PXIO-1stFixP688",
  authDomain: "diariobd-1973d.firebaseapp.com",
  projectId: "diariobd-1973d",
  storageBucket: "diariobd-1973d.appspot.com",
  messagingSenderId: "338787123879",
  appId: "1:338787123879:web:8d7fe00685ba06fedc5182"
};

const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app);
export const auth = getAuth(app);