import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8iVdHWaecZDsJsD42D4-UuwlJ5Sctm10",
    authDomain: "internship-934a8.firebaseapp.com",
    databaseURL: "https://internship-934a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "internship-934a8",
    storageBucket: "internship-934a8.appspot.com",
    messagingSenderId: "1031017343465",
    appId: "1:1031017343465:web:7199513235a0bef31ec378",
    measurementId: "G-CRYD3EXBEJ"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)