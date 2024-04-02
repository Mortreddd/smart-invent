// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO0Ym0x6MMHFITqv8vLj53L5eKF_VbKfw",
    authDomain: "smart-invent.firebaseapp.com",
    projectId: "smart-invent",
    storageBucket: "smart-invent.appspot.com",
    messagingSenderId: "729776556778",
    appId: "1:729776556778:web:56aabdc2ed401f6c4ea593",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app;
