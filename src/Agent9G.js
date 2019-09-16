import React from "react";
import Agen9G from "./assets/Agent9G_Logo.png";
import "./App.css";


const Logo = () => {

  const src = Agen9G;

  return (
    <div className="AGENT9G_Logo_Cont">
      <div className="Logo_Cont">
        <img src={src} alt="AGENT9G_Logo" width="60" height="40" />
      </div>
    </div>
  )
}


export default Logo
