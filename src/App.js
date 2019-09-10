import React from "react";
import AnotherOneVid from "./AnotherOneVid";
import Button from "./Button";
import Prophecy from "./Prophecy";
import Firebase from "./Firebase";
import "./App.css";

const App = () => {
  Firebase.db
    .collection("quotes")
    .get()
    .then(querySnapshot => {
      const dbDataArray = [];
      querySnapshot.forEach(doc => {
        dbDataArray.push(doc.data());
      });
      console.log(dbDataArray);
      setDb(dbDataArray);
    })
    .catch(e => console.log("data not here", e));

  const [db, setDb] = React.useState([]);

  const randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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

    prophecyDisplay.textContent = db[randomIndex(0, db.length)];
  };

  return (
    <div className="App">
      <Prophecy display={"Hell Yeahhhhhh"} />
      <AnotherOneVid />
      <Button onClickFunction={Seleckta} />
    </div>
  );
};

export default App;
