import React from "react";
import "../styles/PagesCss/Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Patrick, o Barba",
      job: "Blockchain Developer | Security Researcher | Bellum Galaxy Founder",
      img: require("../assets/foto_patrick-01.png"),
      social: [
        { class: "fa-brands fa-x-twitter", link: "https://x.com/i3arba" },
        { class: "fa-brands fa-github", link: "https://github.com/i3arba" },
        { class: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/i3arba/" },
      ],
    },
    {
      name: "Raffa Loffredo",
      job: "Data Scientist | Blockchain Data Analyst",
      img: require("../assets/foto_raffa-01.png"),
      social: [
        { class: "fa-brands fa-x-twitter", link: "https://x.com/loffredods" },
        { class: "fa-brands fa-github", link: "https://github.com/raffaloffredo" },
        { class: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/raffaela-loffredo/" },
      ],
    },
    {
      name: "Gabriel Schneider",
      job: "Full Stack Developer | Crawler Developer",
      img: require("../assets/foto_gabriel.png"),
      social: [
        { class: "fa-brands fa-github", link: "https://github.com/dejazz" },
        { class: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/gabriel-muniz-schneider" },
      ],
    },
    {
      name: "Gabriel Thome",
      job: "Full Stack Developer | Software Engineer",
      img: require("../assets/foto_thome.jpg"),
      social: [
        { class: "fa-brands fa-x-twitter", link: "https://x.com/GabrielThomeDev" },
        { class: "fa-brands fa-github", link: "https://github.com/thomasdev5832" },
        { class: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/gabrieltome/" },
      ],
    },
    {
      name: "Cayo Tarcisio",
      job: "Frontend Developer | System Developer",
      img: require("../assets/perfilCayo.jpg"),
      social: [
        { class: "fa-brands fa-x-twitter", link: "https://x.com/TarcisioCayo" },
        { class: "fa-brands fa-github", link: "https://github.com/CayoTarcisio" },
        { class: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/cayo-morais-070b721b9/" },
      ],
    },
  ];

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
        {teamMembers.map((member, index) => (
          <div className="teamCard" key={index}>
            <div className="cardContent">
              <div className="imageTeam">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="social-media">
                {member.social.map((social, index) => (
                  <a
                    key={index}
                    className={social.class}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                  />
                ))}
              </div>
              <div className="teamJob">
                <h1 className="name">{member.name}</h1>
                <h1 className="job">{member.job}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;