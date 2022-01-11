// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhER8U7oVOvrgBtBN7FMoehOqMdAthjOA",
    authDomain: "ecomerce-maurootaduy.firebaseapp.com",
    projectId: "ecomerce-maurootaduy",
    storageBucket: "ecomerce-maurootaduy.appspot.com",
    messagingSenderId: "293889808622",
    appId: "1:293889808622:web:03d08aed1c451dee44bbff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;