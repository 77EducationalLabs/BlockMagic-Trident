import React from "react";
import "../styles/ComponentsCss/NavAbout.css";

function NavAbout() {
  return (
    <>
      <div className="navAbout">
        <ul className="menuAbout">
          <li>
               <i class="fa-solid fa-dice-d6"></i>
              <a>Blockchain Security</a>
          </li>
          <li>
              <i class="fa-solid fa-skull-crossbones"></i>
              <a>Anti-Piracy Infrastructure</a>
          </li>
          <li>
              <i class="fa-solid fa-scroll"></i>
              <a>Secure Application Layer</a>
          </li>
          <li>
              <i class="fa-solid fa-shield-halved"></i>
              <a>Digital Asset Protection</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavAbout;
