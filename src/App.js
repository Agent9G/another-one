import React from "react";
import Navbar from "./Navbar";
import AnotherOneVid from "./AnotherOneVid";
import Button from "./Button";
import Prophecy from "./Prophecy";
import Sharebtns from "./Share"
import Firebase from "./Firebase";
import "./App.css";

const App = () => {
  const [db, setDb] = React.useState(null);

  Firebase.db
    .collection("quotes")
    .get()
    .then(querySnapshot => {
      const dbDataArray = [];
      querySnapshot.forEach(doc => {
        dbDataArray.push(doc.data());
      });
      setDb(dbDataArray);
      return dbDataArray;
    })
    .catch(error => {
      console.log("data not here because", error);
      setDb([]);
    });

  // console.log(db);

  const [quote, setQuote] = React.useState('');

  const randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const Seleckta = () => {
    const prophecyDisplay = document.getElementById("prophecy");
    const video = document.getElementById("anotherOneVid");
    const btnText = document.getElementById("centerbtn");

    if (db.length === 0) {
      const newQuote = "oops";
      setQuote(newQuote);
    } else {
      const newQuote = db[randomIndex(0, db.length)].quote;
      setQuote(newQuote);
    }

    if (video.muted !== false) {
      //if this is not muted
      video.muted = false;
    }
    video.play();

    prophecyDisplay.style.display = "flex";

    if (btnText.textContent === "Bless Up") {
      //dynamism with button text
      btnText.textContent = "Another One";
    } else if (btnText.textContent === "Another One") {
      btnText.textContent = "Bless Up";
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Prophecy display={quote} />
      <AnotherOneVid />
      <Button onClickFunction={Seleckta} />
      <Sharebtns />
    </div>
  );
};

export default App;
