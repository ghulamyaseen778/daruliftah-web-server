// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWG-s5AEap1arTOILU8N-fRGh1b4aK5no",
  authDomain: "yyyyy-32949.firebaseapp.com",
  projectId: "yyyyy-32949",
  storageBucket: "yyyyy-32949.appspot.com",
  messagingSenderId: "831076162888",
  appId: "1:831076162888:web:6539e3af8182abc759a77d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Storage = getStorage(app)

module.exports = {Storage}