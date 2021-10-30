// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVKjkNVEFJYGrauV6s6tWMq_yoDRopMyM",
  authDomain: "chart-12b48.firebaseapp.com",
  projectId: "chart-12b48",
  storageBucket: "chart-12b48.appspot.com",
  messagingSenderId: "142664541392",
  appId: "1:142664541392:web:a55b48d511668a5412ead5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const productCollection = db.ref("data/product"); //firebaseLocation

export default firebase;