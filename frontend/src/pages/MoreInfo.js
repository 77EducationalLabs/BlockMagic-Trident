import React from "react";
import "../styles/PagesCss/MoreInfo.css";

function MoreInfo() {
  return (
    <div className="main-moreinfo" id="moreinfo">
      <section className="content">
        <h2>Enhanced Security Features</h2>
        <p>
          Our platform integrates advanced security measures to protect your digital assets from unauthorized access and piracy. With our state-of-the-art encryption and authentication protocols, you can be confident that your data is secure.
        </p>
        <h2>Seamless Integration</h2>
        <p>
          Easily integrate our anti-piracy technology into your existing systems. Our platform is designed to be flexible and compatible with a variety of gaming environments, ensuring a smooth and hassle-free implementation.
        </p>
        <h2>Real-Time Monitoring</h2>
        <p>
          Stay ahead of potential threats with our real-time monitoring and alert system. Receive instant notifications of any suspicious activity and take immediate action to protect your digital assets.
        </p>
        <a className="learn" href="">
          Discover more ⭢
        </a>
      </section>
    </div>
  );
}

export default MoreInfo;
