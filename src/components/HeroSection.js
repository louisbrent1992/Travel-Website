import React from "react";
import "../App.css";
import { video1, video2 } from "../videos";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const handleTrailer = () => {
    alert("Playing trailer.")
    
  };

  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={handleTrailer}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
