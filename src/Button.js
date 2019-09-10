import React from 'react';
import './App.css';

function Button(props) {
  return (
    <div className="btncontainer">
      <h4><span className="">Tap below to request blessing</span></h4>
      <button className="centerbtn" id="centerbtn" onClick={props.onClickFunction}>Bless Up</button>
    </div>
 );
}



export default Button;
