import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAuWreZNObgp9z2S9huJt_f0M0YsxWPsfQ",
  authDomain: "connect-d23ef.firebaseapp.com",
  projectId: "connect-d23ef",
  storageBucket: "connect-d23ef.appspot.com",
  messagingSenderId: "111417488618",
  appId: "1:111417488618:web:1fca8ace2a1df66cfed393",
  measurementId: "G-1NTQ5GMLG2"
};

// FIREBASE_API_KEY=AIzaSyAuWreZNObgp9z2S9huJt_f0M0YsxWPsfQ
// FIREBASE_AUTH_DOMAIN=connect-d23ef.firebaseapp.com
// FIREBASE_PROJECT_ID=connect-d23ef
// FIREBASE_STORAGE_BUCKET=connect-d23ef.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=111417488618
// FIREBASE_APP_ID=1:111417488618:web:1fca8ace2a1df66cfed393
// FIREBASE_MEASUREMENT_ID=G-1NTQ5GMLG2
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)