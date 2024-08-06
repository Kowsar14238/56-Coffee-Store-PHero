//Before Auth-Step complete firebase setup
//Auth-Step 101: Config firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfC2NXEKW2ICEQEDpTiS5bAUz7evT1GCg",
  authDomain: "coffee-store-phero.firebaseapp.com",
  projectId: "coffee-store-phero",
  storageBucket: "coffee-store-phero.appspot.com",
  messagingSenderId: "633398559387",
  appId: "1:633398559387:web:fad1f3e7b2d03c896fbc3e",
  measurementId: "G-ZYNEE7K56S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default app;
