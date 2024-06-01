import React from "react";
import "../styles/PagesCss/Home.css";
import NavBar from "../components/NavBar";
import Trident from "../assets/trident.png";
import About from "./About";
import Team from "./Team";
import Faq from "./Faq";
import Contact from "./Contact";
import MoreInfo from "./MoreInfo";

function Home() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <section className="hero">
          <div className="subhero">
            <h1>Redefining Game Ownership and Anti-Piracy</h1>
            <p>
              Unlocking a new era of game distribution, ownership, and
              continuous revenue generation
            </p>
            <button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
              </svg>
              Join the Revolution
            </button>
          </div>
          <div className="subhero">
            <img src={Trident} />
          </div>
        </section>
      </div>
      <About />
      <MoreInfo />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}

export default Home;
