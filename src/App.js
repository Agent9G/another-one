import React from 'react';
import AnotherOneVid from './AnotherOneVid';
import Button from './Button';
import Prophecy from './Prophecy';
import Firebase from './Firebase';
import './App.css';

const App = () => {
  console.log(Firebase.quotesCollection);
  const [db, setDb] = React.useState([]);
  const [index, setIndex] = React.useState();

  const Seleckta = () => {
    const prophecyDisplay = document.getElementById('prophecy');
    const video = document.getElementById('anotherOneVid');
    const btnText = document.getElementById('centerbtn');

    if (video.muted !== false) { //if this is not muted
      video.muted = false;
    }
    video.play();

    prophecyDisplay.style.display = "flex";

    if (btnText.textContent === "Bless Up") { //dynamism with button text
      btnText.textContent = "Another One";
    } else if (btnText.textContent === "Another One") {
      btnText.textContent = "Bless Up";
    }

  }

  return (


      <div className = "App">
        <Prophecy display = {"Hell Yeahhhhhh"} />
        <AnotherOneVid />
        <Button onClickFunction ={Seleckta} />
      </div>

  );
}


export default App;
