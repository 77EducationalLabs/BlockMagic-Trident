import react from "react";
import "../styles/PagesCss/Contact.css";
import LogoBellum from "../assets/logoBellum.png";

function Contact() {
  return (
    <>
      
      <section className="bodyContact" id="Contact">
        <div className="ContactTitle">
          <p>Welcome to</p>
          <h1>Bellum Galaxy</h1>
        </div>
        <div className="ContactContent">
        <div className="ContactImage">
          <img src={LogoBellum} alt="Image at Logo Bellum Galaxy" />
        </div>
        <div className="ContactText">
          <p>
          We are an educational, scientific and technological community, focused on breaking barriers and demystifying technology. 
          <br />Our mission is to empower individuals by providing learning and development opportunities, where contributions fuel innovation and drive positive change.
          </p>
        </div>
          <div className="ContactSocial">
              <a class="fa-brands fa-x-twitter" target="_blank" href="https://x.com/bellumgalaxy"/>
              <a class="fa-brands fa-github" target="_blank" href="https://github.com/BellumGalaxy/"/>
              <a class="fa-brands fa-linkedin-in" target="_blank" href="https://www.linkedin.com/company/bellum-galaxy/"/>
              <a class="fa-brands fa-discord" target="_blank" href="https://discord.com/invite/H2UpdzbbRJ"/>
        </div>
        
        <div className="ContactWeb">
          <a target="_blank" href="https://bellumgalaxy.com/">Visit our Website ⭢</a>
        </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
