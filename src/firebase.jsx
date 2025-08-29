import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMKI7mbLed_7Xl2DKQfs4QaMKuFWfB_dA",
  authDomain: "fir-e077c.firebaseapp.com",
  projectId: "fir-e077c",
  storageBucket: "fir-e077c.firebasestorage.app",
  messagingSenderId: "1048360119319",
  appId: "1:1048360119319:web:595550a1fd25b6437e4052",
  measurementId: "G-91NDPP4PN7"
};


const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth }