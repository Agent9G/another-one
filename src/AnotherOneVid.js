import React from 'react';
import './App.css';
import mp4 from "./assets/another-one.mp4";
import poster from "./assets/dj_Khalid_poster.png";
import webm from "./assets/another.webm";


function AnotherOneVid() {

  return (
    <div className="">
      <video playsInline autoPlay muted={true} poster={poster} className="anotherOneVid" id="anotherOneVid" width="414" height="736">
        <source src={mp4}  type='video/mp4' />
        <source src={webm}  type='video/webm' />
      </video>
    </div>
  );
}

export default AnotherOneVid;