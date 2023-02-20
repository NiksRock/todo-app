import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCIfQxrfKf4bhy_Wns7EnJLdGQ7Hu5ZJdo",
  authDomain: "todoapp-7f801.firebaseapp.com",
  databaseURL: "https://todoapp-7f801-default-rtdb.firebaseio.com",
  projectId: "todoapp-7f801",
  storageBucket: "todoapp-7f801.appspot.com",
  messagingSenderId: "845900549540",
  appId: "1:845900549540:web:ff16e4496ec37cad38c531",
  measurementId: "G-5RWCWJ9TM4"
};
// Initialize Firebase
var db = firebase.initializeApp(firebaseConfig);
export default db.database().ref();
