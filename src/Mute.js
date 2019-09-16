import React from 'react';
import './App.css';

const Mute = (props) => {
  return (
    <div className="btncontainer1">
      <button className="centerbtn1" id="centerbtn1" onClick={props.onClickFunction}>{props.textContent}</button>
    </div>
 );
}



export default Mute;
