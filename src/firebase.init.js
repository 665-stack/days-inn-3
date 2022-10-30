// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnLK42a7Wvh6dSrUSsj6HsBXia4XDDC5Y",
    authDomain: "days-inn-65850.firebaseapp.com",
    projectId: "days-inn-65850",
    storageBucket: "days-inn-65850.appspot.com",
    messagingSenderId: "734449652758",
    appId: "1:734449652758:web:706fedd47da2313a629137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
