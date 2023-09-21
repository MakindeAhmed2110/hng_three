// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOGl23K-F7DVH0h9IAZb_OEabhsRhtxM",
  authDomain: "hngi-35166.firebaseapp.com",
  projectId: "hngi-35166",
  storageBucket: "hngi-35166.appspot.com",
  messagingSenderId: "404367765338",
  appId: "1:404367765338:web:9c65e84b91a0e0c4f0cd63",
  measurementId: "G-599YBQ3MKT"
};

// // Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase_app;