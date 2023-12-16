import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDTwUCgLPF5LevQKbdP43XQDgeu4F1mfJw",
    authDomain: "proyecto-divas.firebaseapp.com",
    projectId: "proyecto-divas",
    storageBucket: "proyecto-divas.appspot.com",
    messagingSenderId: "896223743737",
    appId: "1:896223743737:web:d805b5a024b97adf885c28"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)