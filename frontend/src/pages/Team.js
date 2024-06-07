import React from "react";
import "../styles/PagesCss/Team.css";
import twitterLogo from "../assets/twitter.svg";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import fotoPatrick from "../assets/foto_patrick-01.png";
import fotoRaffa from "../assets/foto_raffa-01.png";
import fotoGabrielSchneider from "../assets/foto_gabriel.png";
import fotoGabrielThome from "../assets/foto_thome.jpg";
import perfilCayo from "../assets/perfilCayo.jpg";

function Team() {
  return (
    <section className="bodyTeam" id="team">
      <div className="textTeam">
        <h1>Bellum Galaxy Team</h1>
        <p>
          The development team excels in collaboration, tackling complex
          problems with innovative solutions.<br />
          Their expertise and dedication ensure project success, meeting deadlines and exceeding
          expectations. Teamwork and creativity drive their remarkable
          achievements.
        </p>
      </div>
      <div className="teamContent">
        <div className="teamCard">
          <div className="cardContent">
            <div className="imageTeam">
              <img src={fotoPatrick} alt="Patrick, o Barba" />
            </div>
            <div className="social-media">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/i3arba">
                <img src={twitterLogo} alt="Twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/i3arba">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/i3arba/">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
            <div className="teamJob">
              <h1 className="name">Patrick, o Barba</h1>
              <h1 className="job">Blockchain Developer | Security Researcher | Bellum Galaxy Founder</h1>
            </div>
          </div>
        </div>

        <div className="teamCard">
          <div className="cardContent">
            <div className="imageTeam">
              <img src={fotoRaffa} alt="Raffa Loffredo" />
            </div>
            <div className="social-media">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/loffredods">
                <img src={twitterLogo} alt="Twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/raffaloffredo">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/raffaela-loffredo/">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
            <div className="teamJob">
              <h1 className="name">Raffa Loffredo</h1>
              <h1 className="job">Data Scientist | Blockchain Data Analyst</h1>
            </div>
          </div>
        </div>

        <div className="teamCard">
          <div className="cardContent">
            <div className="imageTeam">
              <img src={fotoGabrielSchneider} alt="Gabriel Schneider" />
            </div>
            <div className="social-media">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dejazz">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabriel-muniz-schneider">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
            <div className="teamJob">
              <h1 className="name">Gabriel Schneider</h1>
              <h1 className="job">Full Stack Developer | Crawler Developer</h1>
            </div>
          </div>
        </div>

        <div className="teamCard">
          <div className="cardContent">
            <div className="imageTeam">
              <img src={fotoGabrielThome} alt="Gabriel Thome" />
            </div>
            <div className="social-media">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/GabrielThomeDev">
                <img src={twitterLogo} alt="Twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/thomasdev5832">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrieltome/">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
            <div className="teamJob">
              <h1 className="name">Gabriel Thome</h1>
              <h1 className="job">Full Stack Developer | Software Engineer</h1>
            </div>
          </div>
        </div>

        <div className="teamCard">
          <div className="cardContent">
            <div className="imageTeam">
              <img src={perfilCayo} alt="Cayo Tarcisio" />
            </div>
            <div className="social-media">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/TarcisioCayo">
                <img src={twitterLogo} alt="Twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/CayoTarcisio">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cayo-morais-070b721b9/">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
            <div className="teamJob">
              <h1 className="name">Cayo Tarcisio</h1>
              <h1 className="job">Frontend Developer | System Developer</h1>
            </div>
          </div>
        </div>
        </div>
      
    </section>
  );
}

export default Team;