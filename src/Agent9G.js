import React from "react";
import Agent9G from "./assets/Agent9G_Logo.png";
import "./App.css";


const Logo = () => {

  const src = Agent9G;
  const url = "https://www.linkedin.com/in/oluadebola/";

  return (
    <div className="AGENT9G_Logo_Cont" >
      <div className="Logo_Cont" onClick={() => window.open(url)}>
        <img src={src} alt="AGENT9G_Logo" width="60" height="40" />
      </div>
    </div>
  )
}


export default Logo
