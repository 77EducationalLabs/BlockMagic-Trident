import React from "react";
import "../styles/ComponentsCss/NavAbout.css";
import diceIcon from '../assets/dice.svg';
import skullIcon from '../assets/skull.svg';
import scrollIcon from '../assets/scroll.svg';
import shieldIcon from '../assets/shield.svg';

function NavAbout() {
  return (
    <>
      <div className="navAbout">
        <ul className="menuAbout">
          <li>
              <img src={diceIcon}></img>
              <a>Blockchain Security</a>
          </li>
          <li>
              <img src={skullIcon}></img>
              <a>Anti-Piracy Infrastructure</a>
          </li>
          <li>
              <img src={scrollIcon}></img>
              <a>Secure Application Layer</a>
          </li>
          <li>
              <img src={shieldIcon}></img>
              <a>Digital Asset Protection</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavAbout;
