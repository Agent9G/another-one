import React from "react";
import Navbar from "./Navbar";
import AnotherOneVid from "./AnotherOneVid";
import BlessUp from "./BlessUp";
import Mute from "./Mute";
import Prophecy from "./Prophecy";
import Sharebtns from "./Share"
import Agent9G from "./Agent9G"
import Firebase from "./Firebase";
import "./App.css";

const App = () => {

  const [db, setDb] = React.useState(null);
  const [quote, setQuote] = React.useState('');
  const [mute, setMute] = React.useState("Mute");

  React.useEffect(() => {
    Firebase.db
      .collection("quotes")
      .limit(50)
      .onSnapshot(querySnapshot => {
        let dbDataArray = [];
        querySnapshot.forEach(doc => {
          dbDataArray.push(doc.data());
        });
        setDb(dbDataArray);
        return dbDataArray;
      }, error => {
        console.log("data not here because", error);
        setDb([]);
      });
  },[db]);

  const randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const Seleckta = () => {
    const prophecyDisplay = document.getElementById("prophecy");
    const video = document.getElementById("anotherOneVid");
    const btnText = document.getElementById("centerbtn");

    if (db.length === 0) {
      const newQuote = "oops, something has gone wrong, but that's life. remain great";
      setQuote(newQuote);
    } else {
      const newQuote = db[randomIndex(0, db.length)].quote;
      setQuote(newQuote);
    }

    if (mute === "Mute") {
      //if this is not muted
      video.muted = false;
    } else {
      video.muted = true;
      video.play();
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

  const muteVid = () => {

    const video = document.getElementById("anotherOneVid");
    const centerbtn1 = document.getElementById("centerbtn1");

    if (video.muted === false) {
        setMute("Mute");
      video.muted = true;
      centerbtn1.style.color= "white";
      centerbtn1.style.backgroundColor= "black";
    } else {
        setMute("Unmute");
      video.muted = false;
      centerbtn1.style.color= "black";
      centerbtn1.style.backgroundColor= "white";
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Prophecy display={quote} />
      <AnotherOneVid />
      <BlessUp onClickFunction={Seleckta} />
      <Mute onClickFunction={muteVid} textContent={mute} />
      <Sharebtns />
      <Agent9G />
    </div>
  );
};

export default App;
