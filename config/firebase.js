const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyANOqrmWyzm5NXjGFhbJ7H57RIxYlijt-c",
  authDomain: "my-rest-api-firebase.firebaseapp.com",
  projectId: "my-rest-api-firebase",
  storageBucket: "my-rest-api-firebase.appspot.com",
  messagingSenderId: "973820306585",
  appId: "1:973820306585:web:6a2795da8d27589bc28408",
  measurementId: "G-KQBJHN76NY"
};

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app