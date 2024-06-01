import React from "react";
import "../styles/PagesCss/About.css";
import Digital from "../assets/digital.png";
import NavAbout from "../components/NavAbout";

function About() {
  return (
    <>
      <div className="main-about" id="about">
        <section className="content">
          <div className="image">
            <img src={Digital} />
          </div>
          <h1>Enter a new era of gaming security</h1>

          <p>
              In the fight against piracy, time is of the essence. Save time,
              money, and resources by leveraging our cutting-edge anti-piracy
              technology rather than developing your own.  
          </p>

            <NavAbout />
            <p>Our platform uses 
              blockchain technology to give you unparalleled control over your 
              digital assets, empowering you to own and manage your digital gaming 
              collection like never before.</p>
              <a className="learn" href="">
              Learn more ⭢
            </a>
        </section>
      </div>
    </>
  );
}

export default About;
