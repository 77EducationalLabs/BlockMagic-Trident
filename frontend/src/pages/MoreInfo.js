import React from "react";
import "../styles/PagesCss/MoreInfo.css";

function MoreInfo() {
  return (
    <div className="main-moreinfo" id="moreinfo">
      <section className="content">
        <i class="fa-solid fa-shield-halved"></i>
        <h2>Enhanced Security Features</h2>
        <p>
          Our platform integrates advanced security measures to protect your game from unauthorized access and piracy. <br />
          With our state-of-the-art encryption and authentication protocols, you can be confident that your game is secure.
        </p>
        <i class="fa-solid fa-hat-wizard"></i>
        <h2>Cross-chain Interoperability</h2>
        <p>
          Improve accessibility and achieve seamless interoperability across multiple networks with our advanced anti-piracy technology.<br />
          Our platform ensures effortless adoption and operation, facilitating smooth integration across diverse network environments.
        </p>
        <i class="fa-solid fa-dragon"></i>
        <h2>AI-Powered Game Rating</h2>
        <p>
          Discover the game rating process enhanced by artificial intelligence. <br />
          Our advanced AI system ensures accurate and timely ratings, providing valuable insights for informed decisions.
        </p>
        <a className="learn" href="">
          Discover more ⭢
        </a>
      </section>
    </div>
  );
}

export default MoreInfo;
