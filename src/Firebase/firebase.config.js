// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3E8P6MCor38L-KgyZBFIjdketMSEsC5U",
  authDomain: "e-store-da9c4.firebaseapp.com",
  projectId: "e-store-da9c4",
  storageBucket: "e-store-da9c4.appspot.com",
  messagingSenderId: "859238074215",
  appId: "1:859238074215:web:8692343e325d329225d1c2",
  measurementId: "G-BGB9MTPJ11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;