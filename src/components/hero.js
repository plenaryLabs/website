import React from "react";
import Button from "../components/button";
import video from "../videoplayback.mp4";

const Hero = () => {
  return (
    <div className="container hero-section">
      <div className="wrapper">
        <div className="content">
          <div className="texts">
            <div className="caps">Início</div>
            <div className="title">Somos mais que uma agência digital.</div>
            <div className="subtitle">
              Faucibus eu mi, lectus placerat. Tincidunt vitae erat facilisis
              amet cras.
            </div>
          </div>
          <div className="buttons">
            <Button type="button" text="Veja mais" />
            <Button type="button-outline" text="Entre em contato" />
          </div>
        </div>
      </div>
      <video autoPlay loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero;
    