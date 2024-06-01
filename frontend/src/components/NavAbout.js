import React from "react";
import "../styles/ComponentsCss/NavAbout.css";

function NavAbout() {
  return (
    <>
      <div className="navAbout">
        <ul className="menuAbout">
          <li>
              <a>Blockchain Security</a>
          </li>
          <li>
              <a>Anti-Piracy Infrastructure</a>
          </li>
          <li>
              <a>Secure Application Layer</a>
          </li>
          <li>
              <a>Digital Asset Protection</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavAbout;
