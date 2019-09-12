import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAkKGS1HEfboD0kC6v6YNy1eleY2BW1w9c",
  authDomain: "another-one-98483.firebaseapp.com",
  databaseURL: "https://another-one-98483.firebaseio.com",
  projectId: "another-one-98483",
  storageBucket: "",
  messagingSenderId: "582734948815",
  appId: "1:582734948815:web:5c66502206eb61c4",
};

class Firebase {
  constructor() {
    //initialize firebase
    firebase.initializeApp(firebaseConfig);
    //initialize db
    this.db = firebase.firestore();
    this.perf = firebase.performance();
  }
}

export default new Firebase();
