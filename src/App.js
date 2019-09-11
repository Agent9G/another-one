import React from "react";
import AnotherOneVid from "./AnotherOneVid";
import Button from "./Button";
import Prophecy from "./Prophecy";
import Firebase from "./Firebase";
import "./App.css";

const App = () => {

  // const [db, setDb] = React.useState([]);

  console.log(Firebase.db
    .collection("quotes")
    .get()
    .then(querySnapshot => {
      const dbDataArray = [];
      querySnapshot.forEach(doc => {
        dbDataArray.push(doc.data());
      });
      return dbDataArray;
    })
    .catch(e => console.log("data not here", e)));


  // const [quote, setQuote] = React.useState('');

  // const randomIndex = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  const Seleckta = () => {
    const prophecyDisplay = document.getElementById("prophecy");
    const video = document.getElementById("anotherOneVid");
    const btnText = document.getElementById("centerbtn");

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

    // const newQuote = db[randomIndex(0, db.length)].quote;
    // setQuote(newQuote);
  };

  return (
    <div className="App">
      <Prophecy display={"Helllloooooo"} />
      <AnotherOneVid />
      <Button onClickFunction={Seleckta} />
    </div>
  );
};

export default App;
