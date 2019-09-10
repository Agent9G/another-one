import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

class Firebase {
  constructor() {
      //initialize firebase
      firebase.initializeApp(firebaseConfig);
      //initialize db
      this.db = firebase.firestore();
  }

  quotesCollection = () => { this.db.collection("quotes").get()
  .then((querySnapshot) => {
    const dbDataArray = [];
    querySnapshot.forEach((doc) => {
      dbDataArray.push(doc.data());
    });
    return dbDataArray;
  })
  .catch ((e) => console.log("data not here", e));
  };
}




export default Firebase;