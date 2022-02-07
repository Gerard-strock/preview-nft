import React from "react";
import logo from "../images/image-equilibrium.jpg";
import logo_eth from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from '../images/image-avatar.png';
import "../style/Desktop.scss";
import "../style/normalize.css"

const Desktop = () => {
  return (
    <body className="bg-color-section">
      <div className="eth-top">
        <div className="image-container">
          <img className="logo-eth" src={logo} alt="logo eth" />
        </div>
        <h1>Equilibrium #3429</h1>
        <p className="typo-clock">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="info-eth">
          <p className="typo-eth">
            <img className="eth-logo" src={logo_eth} alt="logo eth" />
            0.041 ETH
          </p>
          <p className="typo-clock">
            <img className="clock-img" src={clock} alt="clock" /> 3 days left
          </p>
        </div>
        <div className="credits">
          <p className="paraph-credits">
            <img className="avatar-img" src={avatar} alt="" />
            Creation of{" "}
            <span className="paraph-credits-span">Jules Wyvern</span>{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="author-credits">
          Challenge by{" "}
          <a className="credits-mentor" href="https://www.frontendmentor.io/home">Frontend Mentor.</a>{" "}
          Coded by <a className="credits-mentor" href="https://github.com/Gerard-strock">Gerar-strock</a>
        </p>
      </div>
    </body>
  );
};

export default Desktop;
